[%raw "require('isomorphic-fetch')"];

open Schema;

let renderDecorator =
    (
      ~dMap,
      ~innerRegion: option(region)=?,
      ~outerRegion: region,
      decorator: decorator
    ) => {
  let svg =
    switch (Js.Dict.get(dMap, decorator.id)) {
    | Some(svg) => svg
    | None => raise(Failure("decorator does not exist for " ++ decorator.id))
    };
  let element = decorator.element;
  let {alpha}: decoratorElement = element;
  let floatRe = {|[0-9]*\.?[0-9]*|};
  let re =
    Js.Re.fromStringWithFlags(
      Printf.sprintf(
        "viewbox=\"(%s) (%s) (%s) (%s)\"",
        floatRe,
        floatRe,
        floatRe,
        floatRe
      ),
      ~flags="i"
    );
  let (dWidth, dHeight) =
    switch (Js.Re.exec(svg, re)) {
    | Some(match) =>
      let coords =
        Js.Re.captures(match)
        |> Array.to_list
        |> List.tl
        |> List.map(d =>
             switch (Js.Nullable.toOption(d)) {
             | Some(d) => float_of_string(d)
             | None => 0.0
             }
           );
      (
        List.nth(coords, 2) -. List.nth(coords, 0),
        List.nth(coords, 3) -. List.nth(coords, 1)
      );
    | None =>
      raise(Failure("decorator does have viewBox for " ++ decorator.id))
    };
  let svgOut =
    svg |>
    Js.String.replaceByRe(
      Js.Re.fromString("<svg"),
      {j|<svg width="$dWidth" height="$dHeight"|j},
    )
    |>
    Js.String.unsafeReplaceBy1(
      Js.Re.fromString(element.colors |> List.map((c) => c.origin) |> String.concat("|")),
      (match, _, _, _) => {
        (element.colors |> List.find((c) => c.origin === match)).custom
      }
    )
    |> Js.Re.exec(_, Js.Re.fromString("<svg[\s\S]*svg>"))
    |> (s) => switch (s) {
      | Some(match) => Js.Re.captures(match) |> Array.get(_, 0)
      | None => raise(Failure("no svg match"))
      };
  let (regionWidth, regionHeight, dx, dy) =
    if (decorator.target == "area") {
      (outerRegion.width, outerRegion.height, 0.0, 0.0);
    } else {
      switch innerRegion {
      | Some(r) => (r.width, r.height, outerRegion.x -. r.x, outerRegion.y -. r.y)
      | None =>
        raise(Failure("no innner region for text with target = 'content'"))
      };
    };
  let imageX = 0.5 *. regionWidth -. 0.5 *. dWidth;
  let imageY = 0.5 *. regionHeight -. 0.5 *. dHeight;
  let (sx, sy) =
    if (decorator.uniScaling) {
      let ratio = max(regionWidth /. dWidth, regionHeight /. dHeight);
      let scaleX = ratio *. decorator.offsetScale;
      let scaleY = ratio *. decorator.offsetScale;
      (scaleX, scaleY);
    } else {
      let scaleX = regionWidth /. dWidth *. decorator.offsetScale;
      let scaleY = regionHeight /. dHeight *. decorator.offsetScale;
      (scaleX, scaleY);
    };
  let tx =
    regionWidth *. decorator.offsetX -. 0.5 *. regionWidth *. (sx -. 1.) -. dx;
  let ty =
    regionHeight *. decorator.offsetY -. 0.5 *. regionHeight *. (sy -. 1.) -. dy;
  {j|
<g opacity="$alpha" transform="matrix($sx 0 0 $sy $tx $ty)">
  <g transform="translate($imageX $imageY)">
  $svgOut
  </g>
</g>
|j};
};

let renderDecorators =
    (~innerRegion=?, ~outerRegion, ~dMap, parent: string, decorators) => {
  let front =
    decorators
    |> List.filter(d => d.level === "front")
    |> List.map(renderDecorator(~innerRegion?, ~outerRegion, ~dMap))
    |> List.fold_left((++), "");
  let back =
    decorators
    |> List.filter(d => d.level === "back")
    |> List.map(renderDecorator(~innerRegion?, ~outerRegion, ~dMap))
    |> List.fold_left((++), "");
  back ++ parent ++ front;
};

let renderLayer = (~dMap, layerElement: layerElement) => {
  let decorator =
    switch layerElement.decorators {
    | [d] => renderDecorator(~outerRegion=layerElement.region, ~dMap, d)
    | _ => ""
    };
  {j|
$decorator
|j};
};

let renderTextCell = (textElement: textElement, cell: renderDataCell) => {
  let {x, y, width, height, fontSize, fontFamily, text} = cell;
  let fill = textElement.colorScheme.textColor;
  {j|
<tspan
  x="$x"
  y="$y"
  width="$width"
  height="$height"
  fill="$fill"
  style="font-size:$(fontSize)px;font-family:$fontFamily"
  alignment-baseline="hanging"
>$text</tspan>
|j};
};

let renderTextLine = (textElement: textElement, line: renderDataLine) => {
  let renderData = textElement.renderData;
  let outerRegion = textElement.region;
  let innerRegion = renderData.region;
  let {rotate, rotateCenterX, rotateCenterY} = line;
  let (translateX, translateY) = (
    innerRegion.x -. outerRegion.x,
    innerRegion.y -. outerRegion.y
  );
  let chars =
    List.fold_left(
      (++),
      "",
      List.map(renderTextCell(textElement), line.cells)
    );
  {j|
<text
  transform="translate($translateX $translateY) rotate($rotate $rotateCenterX $rotateCenterY)"
>
  $chars
</text>
|j};
};

let renderText = (~dMap, textElement: textElement) => {
  let renderData = textElement.renderData;
  let renderDataElement = renderData.elements;
  let outerRegion = textElement.region;
  let innerRegion = renderData.region;
  let (regionX, regionY) = (outerRegion.x, outerRegion.y);
  let {alpha, rotate} = textElement;
  let (rotateX, rotateY) = (
    outerRegion.width /. 2.0,
    outerRegion.height /. 2.0
  );
  let lines =
    List.fold_left(
      (++),
      "",
      List.map(renderTextLine(textElement), renderDataElement.lines)
    );
  let children =
    renderDecorators(
      ~innerRegion,
      ~outerRegion,
      ~dMap,
      lines,
      textElement.decorators
    );
  {j|
<g
  transform="translate($regionX, $regionY) rotate($rotate $rotateX $rotateY)"
  opacity="$alpha"
>
$children
</g>
|j};
};

let renderImage = (~dMap, imageElement) => {
  let {region, content, imgBox} = imageElement;
  let uri = content.uri;
  let {width, height, scaleX, scaleY}: imgBox = imgBox;
  let rotate =
    switch imageElement.rotate {
    | Some(r) => r
    | None => 0.0
    };
  let alpha =
    switch imageElement.alpha {
    | Some(r) => r
    | None => 1.0
    };
  let regionX = region.x;
  let regionY = region.y;
  let regionWidth = region.width;
  let regionHeight = region.height;
  let regionCenterX = 0.5 *. regionWidth;
  let regionCenterY = 0.5 *. regionHeight;
  let imageX = (-0.5) *. width;
  let imageY = (-0.5) *. height;
  let x = imgBox.x +. regionCenterX;
  let y = imgBox.y +. regionCenterY;
  let createClipPath = shape => {
    let clipPathId = "image-clip-path-" ++ imageElement.id;
    let clipPath = {j|
<defs>
  <clipPath id="$clipPathId">
  $shape
  </clipPath>
</defs>
|j};
    (clipPath, {j|clip-path="url(#$clipPathId)"|j});
  };
  let (clipPath, clipPathUrl) =
    switch imageElement.mask {
    | Some(mask) when mask.type_ === "circle" =>
      let r = min(regionWidth, regionHeight) /. 2.0;
      let shape = {j|<circle cx="$x" cy="$y" r="$r" />|j};
      createClipPath(shape);
    | _ =>
      if (content.fit) {
        ("", "");
      } else {
        let shape = {j|<rect x="0" y="0" width="$regionWidth" height="$regionHeight" />|j};
        createClipPath(shape);
      }
    };
  let image = {j|
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
|j};
  let children =
    renderDecorators(
      ~outerRegion=region,
      ~dMap,
      image,
      imageElement.decorators
    );
  {j|
<g
  transform="translate($regionX $regionY) rotate($rotate $regionCenterX $regionCenterY)"
  opacity="$alpha"
>
$children
</g>
|j};
};

let renderBackground = (backgroundElement: backgroundElement) => {
  let {x, y, width, height}: region = backgroundElement.region;
  let color = backgroundElement.content.color;
  let fill =
    if (color == "") {
      "transparent";
    } else {
      color;
    };
  {j|
<rect x="$x" y="$y" width="$width" height="$height" fill="$fill" />
|j};
};

let renderMask = (maskElement: maskElement) => {
  let {x, y, width, height}: region = maskElement.region;
  let {alpha, color} = maskElement;
  {j|
<rect x="$x" y="$y" width="$width" height="$height" fill="$color" opacity="$alpha" />
|j};
};

let renderSvgElement = (svgElement: svgElement) => {
  let {content, region, alpha, scaleX, scaleY, width, height} = svgElement;
  let uri = content.uri;
  let {x, y}: region = region;
  {j|
<g transform="matrix($scaleX 0 0 $scaleY $x $y)" opacity="$alpha">
  <image href="$uri" width="$width" height="$height" />
</g>
|j};
};

let renderElement = (dMap, element) =>
  switch element {
  | Image(imageElement) => renderImage(~dMap, imageElement)
  | Text(textElement) => renderText(~dMap, textElement)
  | Layer(layerElement) => renderLayer(~dMap, layerElement)
  | Background(backgroundElement) => renderBackground(backgroundElement)
  | Mask(maskElement) => renderMask(maskElement)
  | Svg(svgElement) => renderSvgElement(svgElement)
  | Nothing => ""
  };

let createDecoratorMap = (tree: tree) =>
  Js.Promise.(
    tree.children
    |> List.map(element =>
         switch element {
         | Image(image) => image.decorators
         | Text(text) => text.decorators
         | Layer(layer) => layer.decorators
         | _ => []
         }
       )
    |> List.concat
    |> List.map((d: decorator) =>
         Fetch.fetch(d.element.uri)
         |> then_(Fetch.Response.text)
         |> then_(text => resolve((d.id, text)))
       )
    |> Array.of_list
    |> all
    |> then_(entries =>
         entries |> Array.to_list |> Js.Dict.fromList |> resolve
       )
  );

let renderTree = (dMap, tree) => {
  let width = tree.size.width;
  let height = tree.size.height;
  let children =
    List.fold_left((++), "", List.map(renderElement(dMap), tree.children));
  {j|
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 $width $height"
>$children</svg>
|j};
};

let renderSvg = treeJson => {
  let tree = Decode.tree(treeJson);
  Js.Promise.(
    createDecoratorMap(tree)
    |> Js.Promise.then_(dMap => resolve(renderTree(dMap, tree)))
  );
};
