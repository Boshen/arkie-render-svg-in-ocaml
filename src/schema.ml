type size = {
  width: int;
  height: int;
  unit: string
}

type region = {
  x: float;
  y: float;
  width: float;
  height: float
}

type imageContent = {
  uri: string;
  fit: bool
}

type imgBox = {
  x: float;
  y: float;
  width: float;
  height: float;
  scaleX: float;
  scaleY: float
}

type decoratorElementColor = {
  origin: string;
  custom: string
}

type decoratorElement = {
  alpha: float;
  x: float;
  y: float;
  width: float;
  height: float;
  uri: string;
  rotation: float;
  colors: (decoratorElementColor list) option;
  _type: string
}

type decorator = {
  id: string;
  element: decoratorElement;
  offsetX: float;
  offsetY: float;
  offsetScale: float;
  uniScaling: bool;
  target: string; (* 显示内容 content 贴合内容; area 贴合区域 *)
  level: string
}

type layerElement = {
  id: string;
  region: region;
  decorators: decorator list
}

type imageMask = {type_: string (* circle; rectangle *)}

type imageElement = {
  id: string;
  region: region;
  category: string option;
  content: imageContent;
  imgBox: imgBox option;
  rotate: float;
  alpha: float;
  mask: imageMask option;
  decorators: decorator list
}

type renderDataCell = {
  fill: string;
  fontFamily: string;
  fontSize: float;
  height: float;
  rotate: float;
  rotateCenterX: float;
  rotateCenterY: float;
  text: string;
  width: float;
  x: float;
  y: float
}

type renderDataLine = {
  cells: renderDataCell list;
  height: float;
  rotate: float;
  rotateCenterX: float;
  rotateCenterY: float;
  width: float;
  x: float;
  y: float
}

type renderDataElement = {
  lines: renderDataLine list;
  baseFontSizeEn: float;
  baseFontSizeZh: float;
  boundingHeight: float;
  boundingWidth: float;
  boundingX: float;
  boundingY: float;
  height: float;
  width: float;
  x: float;
  y: float
}

type renderData = {
  region: region;
  elements: renderDataElement
}

type colorScheme = {textColor: string}

type textElement = {
  id: string;
  region: region;
  renderData: renderData;
  rotate: float;
  alpha: float;
  colorScheme: colorScheme;
  decorators: decorator list
}

type backgroundContent = {color: string}

type backgroundElement = {
  id: string;
  region: region;
  content: backgroundContent
}

type maskElement = {
  id: string;
  color: string;
  alpha: float;
  region: region
}

type svgContent = {uri: string}

type svgElement = {
  id: string;
  content: svgContent;
  region: region;
  width: float;
  height: float;
  alpha: float;
  scaleX: float;
  scaleY: float
}

type element =
  | Background of backgroundElement (* 背景 *)
  | Image of imageElement (* 图片 *)
  | Text of textElement (* 文字 *)
  | Layer of layerElement (* 海报装饰 *)
  | Mask of maskElement (* 蒙版 *)
  | Svg of svgElement
  | Nothing

type tree = {
  id: string;
  size: size;
  children: element list
}

type font = {
  access_key: string option;
  font_family: string
}

type 'a apiResonse = {data: 'a}

type renderOptions = {
  fonts: bool option;
  width: float option;
  height: float option
}
