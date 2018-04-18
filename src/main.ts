import sortBy from 'lodash-es/sortBy'
import snakecase from 'lodash-es/snakeCase'
import camelcase  from 'lodash-es/camelCase'

import {
  Tree,
  Element,
  BackgroundElement,
  MaskElement,
  SvgElement,
  ImageElement,
  LayerElement,
  TextElement,
  RenderDataElementLine,
  RenderDataElementLineCell,
  Decorator,
  Region,
} from '@arkie/tree-parser'

declare const $youzikuClient: any

export interface Options {
  fonts: boolean
  width?: number
  height?: number
}

interface FontMap {
  [font_family: string]: any
}
type Dimension = [number, number]
type DecoratorsMap = {[id: string]: [string, Dimension]}

const Youziku = {
  createTag: (key: string, content: any) => {
    return { AccessKey: key, Content: content }
  },
  getBatchFontFace: (tags: any) => {
    return $youzikuClient.getBatchFontFace({ Tags: tags }, () => {})
  }
}

const Font = {
  createFontFace: (fontFamily: string) => {
    return function (blob: any) {
      var head = document.head

      var fontUrl = URL.createObjectURL(blob)
      var fontFace = '@font-face { font-family:\'' + fontFamily + '\' src:url(\'' + fontUrl + '\') format(\'woff\') }'
      var cssId = snakecase(fontFamily)
      var styleList = document.getElementsByName(cssId)
      var style = document.createElement('style') as any

      if (styleList.length > 0) {
        for (var i = 0; i < styleList.length; i++) {
          head.removeChild(styleList[i])
        }
      }

      style.type = 'text/css'
      style.setAttribute("name", cssId)

      if (style.styleSheet) {
        style.styleSheet.cssText = fontFace
      } else if ((document as any).getBoxObjectFor) {
        style.innerHTML = fontFace
      } else {
        style.appendChild(document.createTextNode(fontFace))
      }

      head.appendChild(style)
    }
  },

  getUrl: (uri: string, fontFamily: string) => {
    return uri + camelcase(fontFamily).toLowerCase() + '-regular.woff'
  },

  createGoogleFontLink: (font: string) => {
    var url = Font.getUrl('//youziku.arkie.cn/webfonts/en/', font)
    fetch(url, { headers: { responseType: 'blob' } }).then(function (res) {
      return res.blob()
    }).then(Font.createFontFace(font))
  }
}

const renderSvgDecorator = (decorator: Decorator, svg: string, dimen: Dimension) => {
  const [ dWidth, dHeight ] = dimen
  const { element } = decorator
  svg = svg
    .replace(/<svg[\\s\\S]*svg>/, "$&")
    .replace(/<svg/, `<svg width="${dWidth}" height="${dHeight}"`)
  if (element.colors) {
    svg = svg.replace(
      new RegExp(`(${element.colors.map((c) => c.origin).join('|')})`, 'ig'),
      (m) => {
        const c = element.colors.find((c) => c.origin.toUpperCase() === m.toUpperCase())
        return c ? c.custom : ''
      }
    )
  }
  return svg
}

const renderImageDecorator = (decorator: Decorator, dimen: Dimension) => {
  const [ dWidth, dHeight ] = dimen
  const uri = decorator.element.uri
  return `
    <image xlink:href="${uri}" width="${dWidth}" height="${dHeight}" />
  `
}

const renderDecorator = (decorator: Decorator, options: { innerRegion?: Region, outerRegion: Region, dMap: DecoratorsMap}) => {
  const { innerRegion, outerRegion, dMap } = options
  const { element } = decorator
  const { alpha } = element

  const [ regionWidth, regionHeight, dx, dy ] = (() => {
    if (decorator.target == "area") {
      return [ outerRegion.width, outerRegion.height, 0.0, 0.0 ]
    } else {
      if (innerRegion) {
        return [
          innerRegion.width,
          innerRegion.height,
          outerRegion.x - innerRegion.x,
          outerRegion.y - innerRegion.y
        ]
      } else {
        throw new Error("no innner region for text with target = 'content'")
      }
    }
  })()

  const [ dec, dimensions ] = ((): [string, Dimension] => {
    const d = dMap[decorator.id]
    const dimen = d[1]
    switch (d && decorator.element.type) {
      case 'svg':
        return [renderSvgDecorator(decorator, d[0], dimen), dimen]
      case 'bitmap':
        return [renderImageDecorator(decorator, dimen), dimen]
    }
    throw new Error("decorator does not exist for " + decorator.id)
  })()

  const [ dWidth, dHeight ] = dimensions
  const imageX = regionWidth / 2 - dWidth / 2
  const imageY = regionHeight / 2 - dHeight / 2

  const [ sx, sy ] = (() => {
    if (decorator.uniScaling) {
      const ratio = Math.max(regionWidth / dWidth, regionHeight / dHeight)
      const scaleX = ratio * decorator.offsetScale
      const scaleY = ratio * decorator.offsetScale
      return [ scaleX, scaleY ]
    } else {
      const scaleX = regionWidth / dWidth * decorator.offsetScale
      const scaleY = regionHeight / dHeight * decorator.offsetScale
      return [ scaleX, scaleY ]
    }
  })()

  const tx = regionWidth * decorator.offsetX - regionWidth / 2 * (sx - 1) - dx
  const ty = regionHeight * decorator.offsetY - regionHeight / 2 * (sy - 1) - dy

  return `
    <g opacity="${alpha}" transform="matrix(${sx} 0 0 ${sy} ${tx} ${ty})">
      <g transform="translate(${imageX} ${imageY})">
      ${dec}
      </g>
    </g>
  `
}

const renderDecorators = (parent: string, decorators: Decorator[] = [], options: { innerRegion?: Region, outerRegion: Region, dMap: DecoratorsMap }) => {
  const render = (level: string) => {
    return decorators
      .filter((d) => d.level === level)
      .map((d) => renderDecorator(d, options))
      .join('\n')
  }
  const front = render('front')
  const back = render('back')
  return front + parent + back
}

const renderTextCell = (cell: RenderDataElementLineCell, e: TextElement) => {
  const { x, y, fontSize, fontFamily, text } = cell
  const fill = e.colorScheme.textColor
  return `
    <tspan
      x="${x}"
      y="${y}"
      fill="${fill}"
      alignment-baseline="hanging"
      style="font-size:${fontSize}px;font-family:${fontFamily}"
    >${text}</tspan>
  `
}

const renderTextLine = (line: RenderDataElementLine, e: TextElement) => {
  const { renderData } = e
  const outerRegion = e.region
  const innerRegion = renderData.region
  const { rotate, rotateCenterX, rotateCenterY } = line
  const [ translateX, translateY ] = [ innerRegion.x - outerRegion.x, innerRegion.y - outerRegion.y ]
  const chars = line.cells.map((c) => renderTextCell(c, e)).join('\n')
  return `
    <text transform="translate(${translateX} ${translateY}) rotate(${rotate} ${rotateCenterX} ${rotateCenterY})">
      ${chars}
    </text>
  `
}

const renderText = (e: TextElement, dMap: DecoratorsMap) => {
  const { renderData, alpha, rotate } = e
  const outerRegion = e.region
  const innerRegion = renderData.region
  const [ regionX, regionY ] = [ outerRegion.x, outerRegion.y ]
  const [ rotateX, rotateY ] = [ outerRegion.width / 2.0, outerRegion.height / 2.0 ]
  const lines = renderData.elements.lines.map((l) => renderTextLine(l, e)).join('\n')
  const children = renderDecorators(lines, e.decorators, { innerRegion, outerRegion, dMap })
  return `
    <g
      data-type="${e.type}"
      transform="translate(${regionX}, ${regionY}) rotate(${rotate} ${rotateX} ${rotateY})"
      opacity="${alpha}"
    >
    ${children}
    </g>
  `
}

const renderImage = (e: ImageElement, dMap: DecoratorsMap): string => {
  const { type, content, region, rotate, alpha } = e
  const { uri } = e.content
  const imgBox = e.imgBox || { x: 0.0, y: 0.0, width: 0.0, height: 0.0, scaleX: 0.0, scaleY: 0.0 }
  const { width, height, scaleX, scaleY } = imgBox
  const [ regionX, regionY, regionWidth, regionHeight, regionCenterX, regionCenterY ] =
    [ region.x, region.y, region.width, region.height, region.width / 2, region.height / 2 ]
  const [ imageX, imageY ]  = [ width / -2, height / -2 ]
  const [ x, y ] = [ imgBox.x + regionCenterX, imgBox.y + regionCenterY ]

  const createClipPath = (shape: string) => {
    const clipPathId = 'image-clip-path-' + e.id
    const clipPath = `
      <defs>
        <clipPath id="$clipPathId">
        ${shape}
        </clipPath>
      </defs>
    `
    return [clipPath, `clip-path="url(#${clipPathId})"`]
  }

  const [clipPath, clipPathUrl] = (() => {
    switch (e.mask && e.mask.type) {
      case 'circle':
        const r = Math.min(regionWidth, regionHeight) / 2
        return createClipPath(
          `<circle cx="${x}" cy="${y}" r="${r}" />`
        )
      case 'rectangle':
        if (content.fit) {
          return ['', '']
        }
        return createClipPath(
          `<rect x="0" y="0" width="${regionWidth}" height="${regionHeight}" />`
        )
      default:
        return ['', '']
    }
  })()

  const image = `
    ${clipPath}
    <g ${clipPathUrl}>
      <g transform="matrix(${scaleX} 0 0 ${scaleY} ${x} ${y})">
        <image
          xlink:href="${uri}"
          width="${width}"
          height="${height}"
          transform="translate(${imageX} ${imageY})"
        />
      </g>
    </g>
  `

  const children = renderDecorators(image, e.decorators, { outerRegion: region, dMap })

  return `
    <g
      data-type="${type}"
      transform="translate(${regionX} ${regionY}) rotate(${rotate} ${regionCenterX} ${regionCenterY})"
      opacity="${alpha}"
    >
    ${children}
    </g>
  `
}

const renderBackground = (e: BackgroundElement): string => {
  const { type } = e
  const { x, y, width, height } = e.region
  const fill = e.content.color || '#fff'
  return `
    <rect data-type="${type}" x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}" />
  `
}

const renderLayer = (e: LayerElement, dMap: DecoratorsMap): string => {
  return e.decorators
    ? e.decorators.map((d) => renderDecorator(d, { outerRegion: e.region, dMap })).join('\n')
    : ''
}

const renderMask = (e: MaskElement): string => {
  const { type, alpha, color } = e
  const { x, y, width, height } = e.region
  return `
    <rect data-type="${type}" x="${x}" y="${y}" width="${width}" height="${height}" fill="${color}" opacity="${alpha}" />
  `
}

const renderSvgElement = (e: SvgElement): string => {
  const { type, alpha, scaleX, scaleY, width, height } = e
  const { uri } = e.content
  const { x, y } = e.region
  return `
    <g data-type="${type}" transform="matrix(${scaleX} 0 0 ${scaleY} ${x} ${y})" opacity="${alpha}">
      <image xlink:href="${uri}" width="${width}" height="${height}" />
    </g>
  `
}

const renderElement = (e: Element, dMap: DecoratorsMap): string => {
  const render: any = {
    background: renderBackground,
    layer: renderLayer,
    mask: renderMask,
    svg: renderSvgElement,
    image: renderImage,
    text: renderText,
  }[e.type] || (() => '')
  return render(e, dMap)
}

const renderTree = (tree: Tree, options: Options, dMap: DecoratorsMap): string => {
  const { width, height } = tree.size
  const outerWidth = options.width || width
  const outerHeight = options.height || height
  const children = sortBy(tree.children, (node) => node.type !== 'background')
    .map((e: Element) => renderElement(e, dMap)).join('\n')
  return `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 ${width} ${height}"
      width=${outerWidth}
      height=${outerHeight}
    >
    ${children}
    </svg>
  `
}

const getSvgDimension = (svg: string): Dimension => {
  const floatRe = '[0-9]*\.?[0-9]*'
  const re = new RegExp(`viewbox=\"(${floatRe}) (${floatRe}) (${floatRe}) (${floatRe})\"`, 'i')
  const match = re.exec(svg)
  if (!match) {
    return [0, 0]
  }
  const coords = match.slice(1).map((d: string) => parseInt(d))
  return [coords[2] - coords[0], coords[3] - coords[1]]
}

const imgsize = (src: string): Promise<Dimension> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      resolve([0, 0])
      return
    }
    const image = new Image()
    image.onload = () => {
      resolve([image.width, image.height])
    }
    image.onerror = () => {
      reject()
    }
    image.src = src
  })
}

const createDecoratorMap = (tree: Tree): Promise<DecoratorsMap> => {
  return Promise.all(tree.children
    .reduce((decorators: Decorator[], e: any) => {
      return decorators.concat(['image', 'text', 'layer'].indexOf(e.type) >= 0 ? e.decorators : [])
    }, [])
    .map((d: Decorator): Promise<DecoratorsMap> => {
      if (d.element.type === 'svg') {
        return fetch(d.element.uri)
          .then((r) => r.text())
          .then((text: string) => ({ [d.id]: [text, getSvgDimension(text)] } as DecoratorsMap))
      } else if (d.element.type === 'bitmap') {
        return imgsize(d.element.uri)
          .then((dimen: Dimension) => ({ [d.id]: [d.element.uri, dimen] } as DecoratorsMap))
      } else {
        return Promise.resolve({} as DecoratorsMap)
      }
    }))
    .then((objects: DecoratorsMap[]) => {
      return objects.reduce((d: DecoratorsMap, o: DecoratorsMap) => Object.assign(o, d))
    })
}

let fonts: Promise<FontMap>

const loadFonts = () => {
  if (fonts) {
    return fonts
  }
  fonts = fetch('/api/v0/font')
    .then((r) => r.json())
    .then(({ data }: any) => {
      return data.reduce((acc: FontMap, font: any) => Object.assign(acc, { [font.font_family]: font }), {})
    })
  return fonts
}

const processFonts = (tree: Tree, fonts: FontMap) => {
  const fontFamilyMap = tree.children
    .filter((e: Element) => e.type === 'text')
    .reduce((arr: RenderDataElementLineCell[], e: any) =>  {
      const cells = e.renderData.elements.lines
        .reduce((arr: RenderDataElementLineCell[], line: RenderDataElementLine) => arr.concat(line.cells), [])
      return arr.concat(cells)
    }, [])
    .reduce((map: { [fontFamily: string]: string }, cell: RenderDataElementLineCell) => {
      const text = map[cell.fontFamily] || ''
      map[cell.fontFamily] = text + cell.text
      return map
    }, {})
  const tags = Object.keys(fontFamilyMap)
    .map((fontFamily) => {
      const accessKey = fonts[fontFamily].access_key
      if (accessKey) {
        const text = fontFamilyMap[fontFamily]
        return Youziku.createTag(accessKey, text)
      } else {
        Font.createGoogleFontLink(fontFamily)
        return null
      }
    })
    .filter((v) => !!v)
  return Youziku.getBatchFontFace(tags)
}

export const renderSvg = (tree: Tree, options: Options): Promise<string> => {
  if (options.fonts) {
    loadFonts()
      .then((fonts) => processFonts(tree, fonts))
  }
  return createDecoratorMap(tree)
    .then((dMap: DecoratorsMap) => renderTree(tree, options, dMap))
}
