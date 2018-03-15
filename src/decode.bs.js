'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function convertUri(uri) {
  if (Caml_string.get(uri, 0) === /* "/" */47) {
    return "https:" + uri;
  } else {
    return uri;
  }
}

function sizeDecoder(json) {
  return /* record */[
          /* width */Json_decode.field("width", Json_decode.either(Json_decode.$$int, (function (param) {
                      return Json_decode.map(Caml_format.caml_int_of_string, Json_decode.string, param);
                    })), json),
          /* height */Json_decode.field("height", Json_decode.either(Json_decode.$$int, (function (param) {
                      return Json_decode.map(Caml_format.caml_int_of_string, Json_decode.string, param);
                    })), json),
          /* unit */Json_decode.field("unit", Json_decode.string, json)
        ];
}

function regionDecoder(json) {
  return /* float array */[
          Json_decode.field("x", Json_decode.$$float, json),
          Json_decode.field("y", Json_decode.$$float, json),
          Json_decode.field("width", Json_decode.$$float, json),
          Json_decode.field("height", Json_decode.$$float, json)
        ];
}

function imageContentDecoder(json) {
  return /* record */[
          /* uri */convertUri(Json_decode.field("uri", Json_decode.string, json)),
          /* fit */Json_decode.field("fit", Json_decode.bool, json)
        ];
}

function imgBoxDecoder(json) {
  return /* float array */[
          Json_decode.field("x", Json_decode.$$float, json),
          Json_decode.field("y", Json_decode.$$float, json),
          Json_decode.field("width", Json_decode.$$float, json),
          Json_decode.field("height", Json_decode.$$float, json),
          Json_decode.field("scaleX", Json_decode.$$float, json),
          Json_decode.field("scaleY", Json_decode.$$float, json)
        ];
}

function originalSizeDecoder(json) {
  return /* float array */[
          Json_decode.field("width", Json_decode.$$float, json),
          Json_decode.field("height", Json_decode.$$float, json)
        ];
}

function decoratorElementColorDecoder(json) {
  return /* record */[
          /* origin */Json_decode.field("origin", Json_decode.string, json),
          /* custom */Json_decode.field("custom", Json_decode.string, json)
        ];
}

function decoratorElementDecoder(json) {
  return /* record */[
          /* alpha */Json_decode.field("alpha", Json_decode.$$float, json),
          /* x */Json_decode.field("x", Json_decode.$$float, json),
          /* y */Json_decode.field("y", Json_decode.$$float, json),
          /* width */Json_decode.field("width", Json_decode.$$float, json),
          /* height */Json_decode.field("height", Json_decode.$$float, json),
          /* uri */convertUri(Json_decode.field("uri", Json_decode.string, json)),
          /* rotation */Json_decode.field("rotation", Json_decode.$$float, json),
          /* colors */Json_decode.field("colors", (function (param) {
                  return Json_decode.list(decoratorElementColorDecoder, param);
                }), json)
        ];
}

function decoratorDecoder(json) {
  return /* record */[
          /* id */Json_decode.field("id", Json_decode.string, json),
          /* element */Json_decode.field("element", decoratorElementDecoder, json),
          /* offsetX */Json_decode.field("offsetX", Json_decode.$$float, json),
          /* offsetY */Json_decode.field("offsetY", Json_decode.$$float, json),
          /* offsetScale */Json_decode.field("offsetScale", Json_decode.$$float, json),
          /* uniScaling */Json_decode.field("uniScaling", Json_decode.bool, json),
          /* target */Json_decode.field("target", Json_decode.string, json),
          /* level */Json_decode.field("level", Json_decode.string, json)
        ];
}

function layerDecodoer(json) {
  return /* Layer */Block.__(3, [/* record */[
              /* id */Json_decode.field("id", Json_decode.string, json),
              /* region */Json_decode.field("region", regionDecoder, json),
              /* decorators */Json_decode.field("decorators", (function (param) {
                      return Json_decode.list(decoratorDecoder, param);
                    }), json)
            ]]);
}

function imageMaskDecoder(json) {
  return /* record */[/* type_ */Json_decode.field("type", Json_decode.string, json)];
}

function imageDecodoer(json) {
  return /* Image */Block.__(1, [/* record */[
              /* id */Json_decode.field("id", Json_decode.string, json),
              /* region */Json_decode.field("region", regionDecoder, json),
              /* category */Json_decode.optional((function (param) {
                      return Json_decode.field("category", Json_decode.string, param);
                    }), json),
              /* content */Json_decode.field("content", imageContentDecoder, json),
              /* imgBox */Json_decode.field("imgBox", imgBoxDecoder, json),
              /* originalSize */Json_decode.field("originalSize", originalSizeDecoder, json),
              /* rotate */Json_decode.optional((function (param) {
                      return Json_decode.field("rotate", Json_decode.$$float, param);
                    }), json),
              /* alpha */Json_decode.optional((function (param) {
                      return Json_decode.field("alpha", Json_decode.$$float, param);
                    }), json),
              /* mask */Json_decode.optional((function (param) {
                      return Json_decode.field("mask", imageMaskDecoder, param);
                    }), json),
              /* decorators */Json_decode.field("decorators", (function (param) {
                      return Json_decode.list(decoratorDecoder, param);
                    }), json)
            ]]);
}

function renderDataCellDecoder(json) {
  return /* record */[
          /* fill */Json_decode.field("fill", Json_decode.string, json),
          /* fontFamily */Json_decode.field("fontFamily", Json_decode.string, json),
          /* fontSize */Json_decode.field("fontSize", Json_decode.$$float, json),
          /* height */Json_decode.field("height", Json_decode.$$float, json),
          /* rotate */Json_decode.field("rotate", Json_decode.$$float, json),
          /* rotateCenterX */Json_decode.field("rotateCenterX", Json_decode.$$float, json),
          /* rotateCenterY */Json_decode.field("rotateCenterY", Json_decode.$$float, json),
          /* text */Json_decode.field("text", Json_decode.string, json),
          /* width */Json_decode.field("width", Json_decode.$$float, json),
          /* x */Json_decode.field("x", Json_decode.$$float, json),
          /* y */Json_decode.field("y", Json_decode.$$float, json)
        ];
}

function renderDataLineDecoder(json) {
  return /* record */[
          /* cells */Json_decode.field("cells", (function (param) {
                  return Json_decode.list(renderDataCellDecoder, param);
                }), json),
          /* height */Json_decode.field("height", Json_decode.$$float, json),
          /* rotate */Json_decode.field("rotate", Json_decode.$$float, json),
          /* rotateCenterX */Json_decode.field("rotateCenterX", Json_decode.$$float, json),
          /* rotateCenterY */Json_decode.field("rotateCenterY", Json_decode.$$float, json),
          /* width */Json_decode.field("width", Json_decode.$$float, json),
          /* x */Json_decode.field("x", Json_decode.$$float, json),
          /* y */Json_decode.field("y", Json_decode.$$float, json)
        ];
}

function renderDataElementDecoder(json) {
  return /* record */[
          /* lines */Json_decode.field("lines", (function (param) {
                  return Json_decode.list(renderDataLineDecoder, param);
                }), json),
          /* baseFontSizeEn */Json_decode.field("baseFontSizeEn", Json_decode.$$float, json),
          /* baseFontSizeZh */Json_decode.field("baseFontSizeZh", Json_decode.$$float, json),
          /* boundingHeight */Json_decode.field("boundingHeight", Json_decode.$$float, json),
          /* boundingWidth */Json_decode.field("boundingWidth", Json_decode.$$float, json),
          /* boundingX */Json_decode.field("boundingX", Json_decode.$$float, json),
          /* boundingY */Json_decode.field("boundingY", Json_decode.$$float, json),
          /* height */Json_decode.field("height", Json_decode.$$float, json),
          /* width */Json_decode.field("width", Json_decode.$$float, json),
          /* x */Json_decode.field("x", Json_decode.$$float, json),
          /* y */Json_decode.field("y", Json_decode.$$float, json)
        ];
}

function renderDataDecoder(json) {
  return /* record */[
          /* region */Json_decode.field("region", regionDecoder, json),
          /* elements */Json_decode.field("elements", renderDataElementDecoder, json)
        ];
}

function colorSchemeDecoder(json) {
  return /* record */[/* textColor */Json_decode.field("textColor", Json_decode.string, json)];
}

function textDecodoer(json) {
  return /* Text */Block.__(2, [/* record */[
              /* id */Json_decode.field("id", Json_decode.string, json),
              /* region */Json_decode.field("region", regionDecoder, json),
              /* renderData */Json_decode.field("renderData", renderDataDecoder, json),
              /* rotate */Json_decode.optional((function (param) {
                      return Json_decode.field("rotate", Json_decode.$$float, param);
                    }), json),
              /* alpha */Json_decode.optional((function (param) {
                      return Json_decode.field("alpha", Json_decode.$$float, param);
                    }), json),
              /* colorScheme */Json_decode.field("colorScheme", colorSchemeDecoder, json),
              /* decorators */Json_decode.field("decorators", (function (param) {
                      return Json_decode.list(decoratorDecoder, param);
                    }), json)
            ]]);
}

function backgroundContentDecoder(json) {
  return /* record */[/* color */Json_decode.field("color", Json_decode.string, json)];
}

function backgroundDecoder(json) {
  return /* Background */Block.__(0, [/* record */[
              /* id */Json_decode.field("id", Json_decode.string, json),
              /* region */Json_decode.field("region", regionDecoder, json),
              /* content */Json_decode.field("content", backgroundContentDecoder, json)
            ]]);
}

function maskDecodoer(json) {
  return /* Mask */Block.__(4, [/* record */[
              /* id */Json_decode.field("id", Json_decode.string, json),
              /* color */Json_decode.field("color", Json_decode.string, json),
              /* alpha */Json_decode.field("alpha", Json_decode.$$float, json),
              /* region */Json_decode.field("region", regionDecoder, json)
            ]]);
}

function svgContentDecoder(json) {
  return /* record */[/* uri */convertUri(Json_decode.field("uri", Json_decode.string, json))];
}

function svgDecoder(json) {
  return /* Svg */Block.__(5, [/* record */[
              /* id */Json_decode.field("id", Json_decode.string, json),
              /* content */Json_decode.field("content", svgContentDecoder, json),
              /* region */Json_decode.field("region", regionDecoder, json),
              /* width */Json_decode.field("width", Json_decode.$$float, json),
              /* height */Json_decode.field("height", Json_decode.$$float, json),
              /* alpha */Json_decode.field("alpha", Json_decode.$$float, json),
              /* scaleX */Json_decode.field("scaleX", Json_decode.$$float, json),
              /* scaleY */Json_decode.field("scaleY", Json_decode.$$float, json)
            ]]);
}

function elementDecoder(json) {
  var type_ = Json_decode.field("type", Json_decode.string, json);
  switch (type_) {
    case "background" : 
        return backgroundDecoder(json);
    case "image" : 
        return imageDecodoer(json);
    case "layer" : 
        return layerDecodoer(json);
    case "mask" : 
        return maskDecodoer(json);
    case "svg" : 
        return svgDecoder(json);
    case "text" : 
        return textDecodoer(json);
    default:
      throw [
            Caml_builtin_exceptions.failure,
            "unspecified element type: " + type_
          ];
  }
}

function tree(json) {
  return /* record */[
          /* id */Json_decode.field("id", Json_decode.string, json),
          /* size */Json_decode.field("size", sizeDecoder, json),
          /* children */Json_decode.field("children", (function (param) {
                  return Json_decode.list(elementDecoder, param);
                }), json)
        ];
}

exports.convertUri = convertUri;
exports.sizeDecoder = sizeDecoder;
exports.regionDecoder = regionDecoder;
exports.imageContentDecoder = imageContentDecoder;
exports.imgBoxDecoder = imgBoxDecoder;
exports.originalSizeDecoder = originalSizeDecoder;
exports.decoratorElementColorDecoder = decoratorElementColorDecoder;
exports.decoratorElementDecoder = decoratorElementDecoder;
exports.decoratorDecoder = decoratorDecoder;
exports.layerDecodoer = layerDecodoer;
exports.imageMaskDecoder = imageMaskDecoder;
exports.imageDecodoer = imageDecodoer;
exports.renderDataCellDecoder = renderDataCellDecoder;
exports.renderDataLineDecoder = renderDataLineDecoder;
exports.renderDataElementDecoder = renderDataElementDecoder;
exports.renderDataDecoder = renderDataDecoder;
exports.colorSchemeDecoder = colorSchemeDecoder;
exports.textDecodoer = textDecodoer;
exports.backgroundContentDecoder = backgroundContentDecoder;
exports.backgroundDecoder = backgroundDecoder;
exports.maskDecodoer = maskDecodoer;
exports.svgContentDecoder = svgContentDecoder;
exports.svgDecoder = svgDecoder;
exports.elementDecoder = elementDecoder;
exports.tree = tree;
/* No side effect */
