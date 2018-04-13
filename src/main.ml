external createGoogleFontLink: string -> unit = "createGoogleFontLink" [@@bs.module "./font"]
external imgsize: string -> (float * float) Js_promise.t = "imgsize" [@@bs.module "./imgsize"]

open Schema

let renderSvgDecorator ~decorator ~svg ~dimen =
  let (dWidth, dHeight) = dimen in
  let {element}: decorator = decorator in
  svg
    |> Js.String.replaceByRe (Js.Re.fromString "<svg[\\s\\S]*svg>") "$&"
    |> Js.String.replaceByRe
      (Js.Re.fromString "<svg")
      {j|<svg width="$dWidth" height="$dHeight"|j}
    |> fun (s) -> match element.colors with
      | None -> s
      | Some colors ->
        Js.String.unsafeReplaceBy1
            (Js.Re.fromStringWithFlags
              (Printf.sprintf "(%s)" (colors |> List.map (fun c -> c.origin) |> String.concat "|"))
              ~flags:"ig"
            )
            (fun m _ _ _ ->
              let c = (colors
                |> List.find (fun c -> String.uppercase c.origin == String.uppercase m)
              ) in c.custom
            )
            s

let renderImageDecorator ~decorator ~dimen =
  let (dWidth, dHeight) = dimen in
  let uri = decorator.element.uri in
  {j|
  <image xlink:href="$uri" width="$dWidth" height="$dHeight" />
  |j}

let renderDecorator
  ~dMap
  ?innerRegion: (innerRegion: region option)
  ~outerRegion: (outerRegion: region)
  (decorator: decorator) =
  let {element}: decorator = decorator in
  let {alpha}: decoratorElement = element in

  let (regionWidth, regionHeight, dx, dy) =
    if decorator.target == "area" then
      (outerRegion.width, outerRegion.height, 0.0, 0.0)
    else
      match innerRegion with
      | Some r -> (
          r.width,
          r.height,
          outerRegion.x -. r.x,
          outerRegion.y -. r.y
        )
      | None -> raise (Failure "no innner region for text with target = 'content'")
    in

  let (dec, (dWidth, dHeight)) = match Js.Dict.get dMap decorator.id with
    | Some (s, dimen) -> (match decorator.element._type with
      | "svg" -> (renderSvgDecorator ~decorator ~svg:s ~dimen, dimen)
      | "bitmap" -> (renderImageDecorator ~decorator ~dimen, dimen)
      | _type -> raise (Failure ("unknown svg decorator type: " ^ _type)))
    | None -> raise (Failure ("decorator does not exist for " ^ decorator.id)) in

  let imageX = 0.5 *. regionWidth -. 0.5 *. dWidth in
  let imageY = 0.5 *. regionHeight -. 0.5 *. dHeight in

  let (sx, sy) =
    if decorator.uniScaling then
      let ratio = max (regionWidth /. dWidth) (regionHeight /. dHeight) in
      let scaleX = ratio *. decorator.offsetScale in
      let scaleY = ratio *. decorator.offsetScale in
      (scaleX, scaleY)
    else
      let scaleX = regionWidth /. dWidth *. decorator.offsetScale in
      let scaleY = regionHeight /. dHeight *. decorator.offsetScale in
      (scaleX, scaleY) in

  let tx = regionWidth *. decorator.offsetX -. 0.5 *. regionWidth *. (sx -. 1.) -. dx in
  let ty = regionHeight *. decorator.offsetY -. 0.5 *. regionHeight *. (sy -. 1.) -. dy in

  {j|
  <g opacity="$alpha" transform="matrix($sx 0 0 $sy $tx $ty)">
    <g transform="translate($imageX $imageY)">
    $dec
    </g>
  </g>
  |j}


let renderDecorators
  ?innerRegion
  ~outerRegion
  ~dMap
  (parent: string)
  (decorators: decorator list) =
  let front =
    decorators
    |> List.filter (fun d -> d.level == "front")
    |> List.map (renderDecorator ?innerRegion ~outerRegion ~dMap)
    |> List.fold_left (^) "" in

  let back =
    decorators
    |> List.filter (fun d -> d.level == "back")
    |> List.map (renderDecorator ?innerRegion ~outerRegion ~dMap)
    |> List.fold_left (^) "" in

  back ^ parent ^ front

let renderLayer ~dMap (layerElement:layerElement) =
  let decorator = match layerElement.decorators with
    | d :: [] -> renderDecorator ~outerRegion:layerElement.region ~dMap d
    | _ -> "" in
  {j|
  $decorator
  |j}

let renderTextCell (textElement:textElement) (cell:renderDataCell) =
  let {x; y; fontSize; fontFamily; text} = cell in
  let fill = textElement.colorScheme.textColor in
  {j|
  <tspan
    x="$x"
    y="$y"
    fill="$fill"
    alignment-baseline="hanging"
    style="font-size:$(fontSize)px;font-family:$fontFamily"
  >$text</tspan>
  |j}

let renderTextLine (textElement:textElement) (line:renderDataLine) =
  let {rotate; rotateCenterX; rotateCenterY} = line in
  let chars = List.fold_left (^) "" (List.map (renderTextCell textElement) line.cells) in
  {j|
  <text
    transform="translate($rotateCenterX $rotateCenterY) rotate($rotate $rotateCenterX $rotateCenterY)"
  >
    $chars
  </text>
  |j}

let renderText ~dMap (textElement:textElement) =
  let renderData = textElement.renderData in
  let renderDataElement = renderData.elements in
  let outerRegion = textElement.region in
  let innerRegion = renderData.region in
  let (regionX, regionY) = (outerRegion.x, outerRegion.y) in
  let {alpha; rotate} = textElement in
  let (rotateX, rotateY) = (outerRegion.width /. 2.0, outerRegion.height /. 2.0) in
  let lines = List.fold_left (^) "" (List.map (renderTextLine textElement) renderDataElement.lines) in
  let children = renderDecorators ~innerRegion ~outerRegion ~dMap lines textElement.decorators in
  {j|
  <g
    transform="translate($regionX, $regionY) rotate($rotate $rotateX $rotateY)"
    opacity="$alpha"
  >
  $children
  </g>
  |j}

let renderImage ~dMap imageElement =
  let imgBox = match imageElement.imgBox with
    | None -> {x= 0.0; y= 0.0; width= 0.0; height= 0.0; scaleX= 0.0; scaleY= 0.0}
    | Some i -> i in
  let {region; content}: imageElement = imageElement in
  let uri = content.uri in
  let {width; height; scaleX; scaleY}: imgBox = imgBox in
  let {rotate; alpha}: imageElement = imageElement in
  let regionX = region.x in
  let regionY = region.y in
  let regionWidth = region.width in
  let regionHeight = region.height in
  let regionCenterX = 0.5 *. regionWidth in
  let regionCenterY = 0.5 *. regionHeight in
  let imageX = (-0.5) *. width in
  let imageY = (-0.5) *. height in
  let x = imgBox.x +. regionCenterX in
  let y = imgBox.y +. regionCenterY in

  let createClipPath shape =
    let clipPathId = "image-clip-path-" ^ imageElement.id in
    let clipPath =
    {j|
    <defs>
      <clipPath id="$clipPathId">
      $shape
      </clipPath>
    </defs>
    |j} in
    (clipPath, {j|clip-path="url(#$clipPathId)"|j}) in

  let (clipPath, clipPathUrl) = match imageElement.mask with
    | Some mask when mask.type_ == "circle" ->
      let r = (min regionWidth regionHeight) /. 2.0 in
      let shape = {j|<circle cx="$x" cy="$y" r="$r" />|j} in
      createClipPath shape
    | _ ->
      if content.fit
      then ("", "")
      else
        let shape = {j|<rect x="0" y="0" width="$regionWidth" height="$regionHeight" />|j} in
        createClipPath shape in

  let image =
  {j|
  $clipPath
  <g $clipPathUrl>
    <g transform="matrix($scaleX 0 0 $scaleY $x $y)">
      <image
        xlink:href="$uri"
        width="$width"
        height="$height"
        transform="translate($imageX $imageY)"
      />
    </g>
  </g>
  |j} in

  let children = renderDecorators ~outerRegion:region ~dMap image imageElement.decorators in

  {j|
  <g
    transform="translate($regionX $regionY) rotate($rotate $regionCenterX $regionCenterY)"
    opacity="$alpha"
  >
  $children
  </g>
  |j}

let renderBackground (backgroundElement:backgroundElement) =
  let {x; y; width; height}: region = backgroundElement.region in
  let color = backgroundElement.content.color in
  let fill = if color == "" then "#fff" else color in
  {j|
  <rect x="$x" y="$y" width="$width" height="$height" fill="$fill" />
  |j}

let renderMask (maskElement:maskElement) =
  let {x; y; width; height}: region = maskElement.region in
  let {alpha; color} = maskElement in
  {j|
  <rect x="$x" y="$y" width="$width" height="$height" fill="$color" opacity="$alpha" />
  |j}

let renderSvgElement (svgElement:svgElement) =
  let {content; region; alpha; scaleX; scaleY; width; height} = svgElement in
  let uri = content.uri in
  let {x; y}: region = region in
  {j|
  <g transform="matrix($scaleX 0 0 $scaleY $x $y)" opacity="$alpha">
    <image xlink:href="$uri" width="$width" height="$height" />
  </g>
  |j}

let renderElement dMap = function
  | Image imageElement -> renderImage ~dMap imageElement
  | Text textElement -> renderText ~dMap textElement
  | Layer layerElement -> renderLayer ~dMap layerElement
  | Background backgroundElement -> renderBackground backgroundElement
  | Mask maskElement -> renderMask maskElement
  | Svg svgElement -> renderSvgElement svgElement
  | Nothing -> ""

let floatRe = {|[0-9]*\.?[0-9]*|}
let re = Js.Re.fromStringWithFlags
  (Printf.sprintf "viewbox=\"(%s) (%s) (%s) (%s)\"" floatRe floatRe floatRe floatRe) ~flags:"i"

let getSvgDimension svg = match Js.Re.exec svg re with
  | Some m ->
    let coords = Js.Re.captures m
      |> Array.to_list
      |> List.tl
      |> List.map (fun d -> match Js.Nullable.toOption d with
         | Some d -> float_of_string d
         | None -> 0.0
         ) in
    ((List.nth coords 2) -. (List.nth coords 0),
     (List.nth coords 3) -. (List.nth coords 1))
  | None -> raise (Failure ("decorator does not have viewBox for decorator"))

let createDecoratorMap (tree:tree) =
  Js.Promise.(
    tree.children
    |> List.map (function
       | Image image -> image.decorators
       | Text text -> text.decorators
       | Layer layer -> layer.decorators
       | _ -> []
     )
    |> List.concat
    |> List.map (fun (d:decorator) -> match d.element._type with
      | "svg" -> Fetch.fetch d.element.uri
         |> then_ Fetch.Response.text
         |> then_ (fun text -> resolve (d.id, (text, getSvgDimension text)))
      | "bitmap" -> imgsize d.element.uri
        |> then_ (fun dimen -> resolve (d.id, (d.element.uri, dimen)))
      | _type -> raise (Failure ("unknown svg decorator type: " ^ _type))
    )
    |> Array.of_list
    |> all
    |> then_ (fun entries ->
         entries |> Array.to_list |> Js.Dict.fromList |> resolve
       )
  )

let renderTree ~dMap ?svgWidth ?svgHeight tree =
  let outerWidth = match svgWidth with
    | None -> ""
    | Some w -> {j|width="$w"|j} in
  let outerHeight = match svgHeight with
    | None -> ""
    | Some h -> {j|height="$h"|j} in
  let {width; height}: size = tree.size in
  let (background, others) =
    tree.children
    |> List.partition (function
      | Background _ -> true
      | _ -> false
    ) in
  let bg = List.fold_left (^) "" (List.map (renderElement dMap) background) in
  let children = List.fold_left (^) "" (List.map (renderElement dMap) others) in
  {j|
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 $width $height" $outerWidth $outerHeight
  >
  $bg
  $children
  </svg>
  |j}

let fonts = ref None

let loadFonts () = match !fonts with
  | Some f -> f
  | None ->
    let fontsPromise =
      Js.Promise.(
        Fetch.fetch "/api/v0/font"
        |> then_ Fetch.Response.json
        |> then_ (fun s ->
             (Decode.fonts s).data
             |> List.map (fun font -> (font.font_family, font))
             |> Js.Dict.fromList
             |> resolve
           )
      ) in
    fonts := Some fontsPromise;
    fontsPromise

let processFonts tree fonts =
  tree.children
  |> List.fold_left
    (fun l -> function
      | Text e -> e :: l
      | _ -> l
    )
    []
  |> List.map (fun (textElement: textElement) ->
       textElement.renderData.elements.lines |> List.map (fun line -> line.cells)
     )
  |> List.concat
  |> List.concat
  |> List.fold_left
       (fun dict cell ->
         let text = match Js.Dict.get dict cell.fontFamily with
           | Some t -> t
           | None -> "" in
         Js.Dict.set dict cell.fontFamily (text ^ cell.text);
         dict
       )
       (Js.Dict.empty ())
  |> (fun fontMap ->
      fontMap
      |> Js.Dict.keys
      |> Array.map
          (fun fontFamily ->
            let text = Js.Dict.unsafeGet fontMap fontFamily in
            let accessKey = (Js.Dict.unsafeGet fonts fontFamily).access_key in
            match accessKey with
            | Some key -> Some (Youziku.createTag key text)
            | None ->
              createGoogleFontLink fontFamily;
              None
          )
      |> Array.to_list
      |> List.fold_left (fun l -> function
           | Some (e: Youziku.tag) -> e :: l
           | None -> l
         )
         []
      |> Array.of_list
    )
  |> (fun (tags: Youziku.tag array) -> Youziku.getBatchFontFace tags)

let renderSvg treeJson optionsJson =
  let options = Decode.decodeOptions optionsJson in
  let tree = Decode.tree treeJson in

  let _ = match options.fonts with
    | Some true -> loadFonts ()
      |> Js.Promise.then_ (fun fonts ->
           processFonts tree fonts;
           Js.Promise.resolve ()
         )
    | _ -> Js.Promise.resolve () in

  Js.Promise.(
    createDecoratorMap tree
    |> then_ (fun dMap ->
        resolve (renderTree ~dMap ?svgWidth:options.width ?svgHeight:options.height tree)
       )
  )
