open! Json.Decode;

open Schema;

let convertUri = uri =>
  if (uri.[0] == '/') {
    "https:" ++ uri;
  } else {
    uri;
  };

let sizeDecoder = json => {
  width: json |> field("width", either(int, map(int_of_string) @@ string)),
  height: json |> field("height", either(int, map(int_of_string) @@ string)),
  unit: json |> field("unit", string)
};

let regionDecoder = json => {
  x: json |> field("x", float),
  y: json |> field("y", float),
  width: json |> field("width", float),
  height: json |> field("height", float)
};

let imageContentDecoder = json => {
  uri: json |> field("uri", string) |> convertUri,
  fit: json |> field("fit", bool)
};

let imgBoxDecoder = json => {
  x: json |> field("x", float),
  y: json |> field("y", float),
  width: json |> field("width", float),
  height: json |> field("height", float),
  scaleX: json |> field("scaleX", float),
  scaleY: json |> field("scaleY", float)
};

let originalSizeDecoder = json => {
  width: json |> field("width", float),
  height: json |> field("height", float)
};

let decoratorElementColorDecoder = (json) => {
  origin: json |> field("origin", string),
  custom: json |> field("custom", string)
};

let decoratorElementDecoder = json => {
  alpha: json |> field("alpha", float),
  x: json |> field("x", float),
  y: json |> field("y", float),
  width: json |> field("width", float),
  height: json |> field("height", float),
  uri: json |> field("uri", string) |> convertUri,
  rotation: json |> field("rotation", float),
  colors: json |> field("colors", list(decoratorElementColorDecoder))
};

let decoratorDecoder = json => {
  id: json |> field("id", string),
  element: json |> field("element", decoratorElementDecoder),
  offsetX: json |> field("offsetX", float),
  offsetY: json |> field("offsetY", float),
  offsetScale: json |> field("offsetScale", float),
  uniScaling: json |> field("uniScaling", bool),
  level: json |> field("level", string),
  target: json |> field("target", string)
};

let layerDecodoer = json => Layer({
  id: json |> field("id", string),
  region: json |> field("region", regionDecoder),
  decorators: json |> field("decorators", list(decoratorDecoder))
});

let imageMaskDecoder = json => {
  type_: json |> field("type", string)
};

let imageDecodoer = json =>
  Image({
    id: json |> field("id", string),
    region: json |> field("region", regionDecoder),
    category: json |> optional(field("category", string)),
    content: json |> field("content", imageContentDecoder),
    imgBox: json |> field("imgBox", imgBoxDecoder),
    originalSize: json |> field("originalSize", originalSizeDecoder),
    rotate: json |> optional(field("rotate", float)),
    alpha: json |> optional(field("alpha", float)),
    mask: json |> optional(field("mask", imageMaskDecoder)),
    decorators: json |> field("decorators", list(decoratorDecoder))
  });

let renderDataCellDecoder = json => {
  fill: json |> field("fill", string),
  fontFamily: json |> field("fontFamily", string),
  fontSize: json |> field("fontSize", float),
  height: json |> field("height", float),
  rotate: json |> field("rotate", float),
  rotateCenterX: json |> field("rotateCenterX", float),
  rotateCenterY: json |> field("rotateCenterY", float),
  text: json |> field("text", string),
  width: json |> field("width", float),
  x: json |> field("x", float),
  y: json |> field("y", float)
};

let renderDataLineDecoder = json => {
  cells: json |> field("cells", list(renderDataCellDecoder)),
  height: json |> field("height", float),
  rotate: json |> field("rotate", float),
  rotateCenterX: json |> field("rotateCenterX", float),
  rotateCenterY: json |> field("rotateCenterY", float),
  width: json |> field("width", float),
  x: json |> field("x", float),
  y: json |> field("y", float)
};

let renderDataElementDecoder = json => {
  lines: json |> field("lines", list(renderDataLineDecoder)),
  baseFontSizeEn: json |> field("baseFontSizeEn", float),
  baseFontSizeZh: json |> field("baseFontSizeZh", float),
  boundingHeight: json |> field("boundingHeight", float),
  boundingWidth: json |> field("boundingWidth", float),
  boundingX: json |> field("boundingX", float),
  boundingY: json |> field("boundingY", float),
  width: json |> field("width", float),
  height: json |> field("height", float),
  x: json |> field("x", float),
  y: json |> field("y", float),
};

let renderDataDecoder = json => {
  region: json |> field("region", regionDecoder),
  elements: json |> field("elements", renderDataElementDecoder)
};

let colorSchemeDecoder = json => {
  textColor: json |> field("textColor", string),
};

let textDecodoer = json =>
  Text({
    id: json |> field("id", string),
    region: json |> field("region", regionDecoder),
    renderData: json |> field("renderData", renderDataDecoder),
    rotate: json |> optional(field("rotate", float)),
    alpha: json |> optional(field("alpha", float)),
    colorScheme: json |> field("colorScheme", colorSchemeDecoder),
    decorators: json |> field("decorators", list(decoratorDecoder))
  });

let backgroundContentDecoder = json => {
  color: json |> field("color", string),
};

let backgroundDecoder = json =>
 Background({
    id: json |> field("id", string),
    region: json |> field("region", regionDecoder),
    content: json |> field("content", backgroundContentDecoder),
 });

let maskDecodoer = json => Mask({
  id: json |> field("id", string),
  color: json |> field("color", string),
  alpha: json |> field("alpha", float),
  region: json |> field("region", regionDecoder),
});

let svgContentDecoder = json => {
  uri: json |> field("uri", string) |> convertUri,
};

let svgDecoder = json => Svg({
  id: json |> field("id", string),
  region: json |> field("region", regionDecoder),
  content: json |> field("content", svgContentDecoder),
  width: json |> field("width", float),
  height: json |> field("height", float),
  scaleX: json |> field("scaleX", float),
  scaleY: json |> field("scaleY", float),
  alpha: json |> field("alpha", float)
});

let elementDecoder = json => {
  let type_ = json |> field("type", string);
  switch type_ {
  | "background" => backgroundDecoder(json)
  | "image" => imageDecodoer(json)
  | "text" => textDecodoer(json)
  | "layer" => layerDecodoer(json)
  | "mask" => maskDecodoer(json)
  | "svg" => svgDecoder(json)
  | _ => raise(Failure("unspecified element type: " ++ type_))
  };
};

let tree = json => {
  id: json |> field("id", string),
  size: json |> field("size", sizeDecoder),
  children: json |> field("children", list(elementDecoder))
};
