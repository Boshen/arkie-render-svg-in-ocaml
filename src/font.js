import snakecase from 'lodash-es/snakeCase';
import camelcase  from 'lodash-es/camelCase';

function createFontFace(fontFamily) {
  return function (blob) {
    var _document = document,
        head = _document.head;

    var fontUrl = URL.createObjectURL(blob),
        fontFace = '@font-face { font-family:\'' + fontFamily + '\'; src:url(\'' + fontUrl + '\') format(\'woff\'); }',
        cssId = snakecase(fontFamily),
        styleList = document.getElementsByName(cssId),
        style = document.createElement('style');

    if (styleList.length > 0) {
      for (var i = 0; i < styleList.length; i++) {
        head.removeChild(styleList[i]);
      }
    }

    style.type = 'text/css';
    style.setAttribute("name", cssId);

    if (style.styleSheet) {
      style.styleSheet.cssText = fontFace;
    } else if (document.getBoxObjectFor) {
      style.innerHTML = fontFace;
    } else {
      style.appendChild(document.createTextNode(fontFace));
    }

    head.appendChild(style);
  };
};

function getUrl(uri, fontFamily) {
  return uri + camelcase(fontFamily).toLowerCase() + '-regular.woff';
};

function createGoogleFontLink(font) {
  var url = getUrl('//youziku.arkie.cn/webfonts/en/', font);
  fetch(url, { headers: { responseType: 'blob' } }).then(function (res) {
    return res.blob();
  }).then(createFontFace(font));
};

export {
  createGoogleFontLink
}
