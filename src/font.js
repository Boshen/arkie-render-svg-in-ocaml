const snakecase = require('lodash.snakecase');
const camelcase = require('lodash.camelcase');

const createFontFace = (fontFamily) => (blob) => {
  const {head} = document;

  let fontUrl = URL.createObjectURL(blob),
    fontFace = `@font-face { font-family:'${fontFamily}'; src:url('${fontUrl}') format('woff'); }`,
    cssId = snakecase(fontFamily),
    styleList = document.getElementsByName(cssId),
    style = document.createElement('style');

  if (styleList.length > 0) {
    for (let i = 0; i < styleList.length; i++) {
      head.removeChild(styleList[i]);
    }
  }

  style.type = 'text/css'
  style.setAttribute("name", cssId);

  if (style.styleSheet) {
    style.styleSheet.cssText = fontFace;
  } else if (document.getBoxObjectFor) {
    style.innerHTML = fontFace;
  } else {
    style.appendChild(document.createTextNode(fontFace));
  }

  head.appendChild(style);
}

const getUrl = (uri, fontFamily) => {
  return `${uri + camelcase(fontFamily).toLowerCase()}-regular.woff`;
}

const createGoogleFontLink = (font) => {
  const url = getUrl('//youziku.arkie.cn/webfonts/en/', font);
  fetch(url, { headers: {responseType: 'blob'}})
    .then((res) => {
      return res.blob()
    })
    .then(createFontFace(font));
}

module.exports.createGoogleFontLink = createGoogleFontLink;
