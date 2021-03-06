open! Json.Decode

open Schema

let convertUri uri =
  if (uri.[0] == '/') then "https:" ^ uri else uri

let getWithDefault default = function
  | Some x -> x
  | None -> default

let sizeDecoder json = {
  width = json |> field "width" (either int (map(int_of_string) @@ string));
  height = json |> field "height" (either int (map(int_of_string) @@ string));
  unit = json |> field "unit" string;
}

let regionDecoder json = {
  x = json |> optional @@ field "x" float |> getWithDefault 0.0;
  y = json |> optional @@ field "y" float |> getWithDefault 0.0;
  width = json |> optional @@ field "width" float |> getWithDefault 0.0;
  height = json |> optional @@ field "height" float |> getWithDefault 0.0;
}

let imageContentDecoder json = {
  uri = json |> field "uri" string |> convertUri;
  fit = json |> optional @@ field "fit" bool |> getWithDefault true
}

let imgBoxDecoder json = {
  x = json |> field "x" float;
  y = json |> field "y" float;
  width = json |> field "width" float;
  height = json |> field "height" float;
  scaleX = json |> field "scaleX" float;
  scaleY = json |> field "scaleY" float
}

let decoratorElementColorDecoder json = {
  origin = json |> field "origin" string;
  custom = json |> field "custom" string
}

let decoratorElementDecoder json = {
  alpha = json |> field "alpha" float;
  x = json |> field "x" float;
  y = json |> field "y" float;
  width = json |> field "width" float;
  height = json |> field "height" float;
  uri = json |> field "uri" string |> convertUri;
  rotation = json |> field "rotation" float;
  colors = json |> optional @@ field "colors" (list decoratorElementColorDecoder);
  _type = json |> field "type" string
}

let decoratorDecoder json = {
  id = json |> field "id" string;
  element = json |> field "element" decoratorElementDecoder;
  offsetX = json |> field "offsetX" float;
  offsetY = json |> field "offsetY" float;
  offsetScale = json |> field "offsetScale" float;
  uniScaling = json |> field "uniScaling" bool;
  level = json |> field "level" string;
  target = json |> field "target" string
}

let decoratorsDecoder json =
  json |> optional @@ field "decorators" (list decoratorDecoder) |> getWithDefault []

let layerDecodoer json = Layer({
  id = json |> field "id" string;
  region = json |> field "region" regionDecoder;
  decorators = json |> decoratorsDecoder
})

let imageMaskDecoder json = {
  type_ = json |> field "type" string
}

let imageDecodoer json =
  Image({
    id = json |> field "id" string;
    region = json |> field "region" regionDecoder;
    category = json |> optional(field "category" string);
    content = json |> field "content" imageContentDecoder;
    imgBox = json |> optional @@ field "imgBox" imgBoxDecoder;
    rotate = json |> optional @@ field "rotate" float |> getWithDefault 0.0;
    alpha = json |> optional @@ field "alpha" float |> getWithDefault 1.0;
    mask = json |> optional @@ field "mask" imageMaskDecoder;
    decorators = json |> decoratorsDecoder
  })

let renderDataCellDecoder json = {
  fill = json |> field "fill" string;
  fontFamily = json |> field "fontFamily" string;
  fontSize = json |> field "fontSize" float;
  height = json |> field "height" float;
  rotate = json |> field "rotate" float;
  rotateCenterX = json |> field "rotateCenterX" float;
  rotateCenterY = json |> field "rotateCenterY" float;
  text = json |> field "text" string;
  width = json |> field "width" float;
  x = json |> field "x" float;
  y = json |> field "y" float
}

let renderDataLineDecoder json = {
  cells = json |> field "cells" (list renderDataCellDecoder);
  height = json |> field "height" float;
  rotate = json |> field "rotate" float;
  rotateCenterX = json |> field "rotateCenterX" float;
  rotateCenterY = json |> field "rotateCenterY" float;
  width = json |> field "width" float;
  x = json |> field "x" float;
  y = json |> field "y" float
}

let renderDataElementDecoder json = {
  lines = json |> field "lines" (list renderDataLineDecoder);
  baseFontSizeEn = json |> field "baseFontSizeEn" float;
  baseFontSizeZh = json |> field "baseFontSizeZh" float;
  boundingHeight = json |> field "boundingHeight" float;
  boundingWidth = json |> field "boundingWidth" float;
  boundingX = json |> field "boundingX" float;
  boundingY = json |> field "boundingY" float;
  width = json |> field "width" float;
  height = json |> field "height" float;
  x = json |> field "x" float;
  y = json |> field "y" float;
}

let renderDataDecoder json = {
  region = json |> field "region" regionDecoder;
  elements = json |> field "elements" renderDataElementDecoder
}

let colorSchemeDecoder json = {
  textColor = json |> field "textColor" string;
}

let textDecodoer json =
  Text({
    id = json |> field "id" string;
    region = json |> field "region" regionDecoder;
    renderData = json |> field "renderData" renderDataDecoder;
    rotate = json |> optional @@ field "rotate" float |> getWithDefault 0.0;
    alpha = json |> optional @@ field "alpha" float |> getWithDefault 1.0;
    colorScheme = json |> field "colorScheme" colorSchemeDecoder;
    decorators = json |> decoratorsDecoder
  })

let backgroundContentDecoder json = {
  color = json |> field "color" string;
}

let backgroundDecoder json =
 Background({
    id = json |> field "id" string;
    region = json |> field "region" regionDecoder;
    content = json |> field "content" backgroundContentDecoder;
 })

let maskDecodoer json = Mask({
  id = json |> field "id" string;
  color = json |> field "color" string;
  alpha = json |> field "alpha" float;
  region = json |> field "region" regionDecoder;
})

let svgContentDecoder json = {
  uri = json |> field "uri" string |> convertUri;
}

let svgDecoder json = Svg({
  id = json |> field "id" string;
  region = json |> field "region" regionDecoder;
  content = json |> field "content" svgContentDecoder;
  width = json |> field "width" float;
  height = json |> field "height" float;
  scaleX = json |> field "scaleX" float;
  scaleY = json |> field "scaleY" float;
  alpha = json |> field "alpha" float
})

let elementDecoder json =
  let type_ = json |> field "type" string in
  match type_ with
  | "background" -> backgroundDecoder(json)
  | "image" -> imageDecodoer(json)
  | "text" -> textDecodoer(json)
  | "layer" -> layerDecodoer(json)
  | "mask" -> maskDecodoer(json)
  | "svg" -> svgDecoder(json)
  | _ -> raise (Failure ("unspecified element type: " ^ type_))

let tree json = {
  id = json |> field "id" string;
  size = json |> field "size" sizeDecoder;
  children = json |> field "children" (list elementDecoder)
}

let fontDecoder json = {
  access_key = json |> optional @@ field "access_key" string;
  font_family = json |> field "font_family" string
}

let fonts json = {
  data = json |> field "data" (list fontDecoder)
}

let decodeOptions json = {
  fonts = json |> optional @@ field "fonts" bool;
  width = json |> optional @@ field "width" float;
  height = json |> optional @@ field "height" float
}
