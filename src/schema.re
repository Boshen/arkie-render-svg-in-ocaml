type size = {
  width: int,
  height: int,
  unit: string
};

type region = {
  x: float,
  y: float,
  width: float,
  height: float
};

type imageContent = {
  uri: string,
  fit: bool
};

type originalSize = {
  width: float,
  height: float
};

type imgBox = {
  x: float,
  y: float,
  width: float,
  height: float,
  scaleX: float,
  scaleY: float
};

type decoratorElementColor = {
  origin: string,
  custom: string
};

type decoratorElement = {
  alpha: float,
  x: float,
  y: float,
  width: float,
  height: float,
  uri: string,
  rotation: float,
  colors: list(decoratorElementColor)
};

type decorator = {
  id: string,
  element: decoratorElement,
  offsetX: float,
  offsetY: float,
  offsetScale: float,
  uniScaling: bool,
  target: string, /* 显示内容 content 贴合内容, area 贴合区域 */
  level: string
};

type layerElement = {
  id: string,
  region,
  decorators: list(decorator)
};

type imageMask = {type_: string /* circle, rectangle */};

type imageElement = {
  id: string,
  region,
  category: option(string),
  content: imageContent,
  imgBox,
  originalSize,
  rotate: option(float),
  alpha: option(float),
  mask: option(imageMask),
  decorators: list(decorator)
};

type renderDataCell = {
  fill: string,
  fontFamily: string,
  fontSize: float,
  height: float,
  rotate: float,
  rotateCenterX: float,
  rotateCenterY: float,
  text: string,
  width: float,
  x: float,
  y: float
};

type renderDataLine = {
  cells: list(renderDataCell),
  height: float,
  rotate: float,
  rotateCenterX: float,
  rotateCenterY: float,
  width: float,
  x: float,
  y: float
};

type renderDataElement = {
  lines: list(renderDataLine),
  baseFontSizeEn: float,
  baseFontSizeZh: float,
  boundingHeight: float,
  boundingWidth: float,
  boundingX: float,
  boundingY: float,
  height: float,
  width: float,
  x: float,
  y: float
};

type renderData = {
  region,
  elements: renderDataElement
};

type colorScheme = {textColor: string};

type textElement = {
  id: string,
  region,
  renderData,
  rotate: option(float),
  alpha: option(float),
  colorScheme,
  decorators: list(decorator)
};

type backgroundContent = {color: string};

type backgroundElement = {
  id: string,
  region,
  content: backgroundContent
};

type maskElement = {
  id: string,
  color: string,
  alpha: float,
  region
};

type svgContent = {uri: string};

type svgElement = {
  id: string,
  content: svgContent,
  region,
  width: float,
  height: float,
  alpha: float,
  scaleX: float,
  scaleY: float
};

type element =
  | Background(backgroundElement) /* 背景 */
  | Image(imageElement) /* 图片 */
  | Text(textElement) /* 文字 */
  | Layer(layerElement) /* 海报装饰 */
  | Mask(maskElement) /* 蒙版 */
  | Svg(svgElement)
  | Nothing;

type tree = {
  id: string,
  size,
  children: list(element)
};

type font = {
  access_key: option(string),
  font_family: string
};

type apiResonse('a) = {data: 'a};

[@bs.deriving jsConverter]
type renderOptions = {
  fonts: bool
}
