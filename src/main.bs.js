'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Font = require("./font");
var Printf = require("bs-platform/lib/js/printf.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var Decode$BuckleSandbox = require("./decode.bs.js");
var Schema$BuckleSandbox = require("./schema.bs.js");
var Youziku$BuckleSandbox = require("./youziku.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

((require('isomorphic-fetch')));

function renderDecorator(dMap, innerRegion, outerRegion, decorator) {
  var match = dMap[decorator[/* id */0]];
  var svg;
  if (match !== undefined) {
    svg = match;
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "decorator does not exist for " + decorator[/* id */0]
        ];
  }
  var floatRe = "[0-9]*\\.?[0-9]*";
  var re = new RegExp(Curry._4(Printf.sprintf(/* Format */[
                /* String_literal */Block.__(11, [
                    "viewbox=\"(",
                    /* String */Block.__(2, [
                        /* No_padding */0,
                        /* String_literal */Block.__(11, [
                            ") (",
                            /* String */Block.__(2, [
                                /* No_padding */0,
                                /* String_literal */Block.__(11, [
                                    ") (",
                                    /* String */Block.__(2, [
                                        /* No_padding */0,
                                        /* String_literal */Block.__(11, [
                                            ") (",
                                            /* String */Block.__(2, [
                                                /* No_padding */0,
                                                /* String_literal */Block.__(11, [
                                                    ")\"",
                                                    /* End_of_format */0
                                                  ])
                                              ])
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ])
                  ]),
                "viewbox=\"(%s) (%s) (%s) (%s)\""
              ]), floatRe, floatRe, floatRe, floatRe), "i");
  var match$1 = re.exec(svg);
  var match$2;
  if (match$1 !== null) {
    var coords = List.map((function (d) {
            if (d == null) {
              return 0.0;
            } else {
              return Caml_format.caml_float_of_string(d);
            }
          }), List.tl($$Array.to_list(match$1)));
    match$2 = /* tuple */[
      List.nth(coords, 2) - List.nth(coords, 0),
      List.nth(coords, 3) - List.nth(coords, 1)
    ];
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "decorator does have viewBox for " + decorator[/* id */0]
        ];
  }
  var dHeight = match$2[1];
  var dWidth = match$2[0];
  var s = svg.replace(new RegExp("<svg"), "<svg width=\"" + (String(dWidth) + ("\" height=\"" + (String(dHeight) + "\""))));
  var s$1 = new RegExp("<svg[\\s\\S]*svg>").exec(s);
  var svgOut;
  if (s$1 !== null) {
    svgOut = (function (param) {
        return Caml_array.caml_array_get(s$1, param);
      });
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "no svg match"
        ];
  }
  var match$3;
  if (decorator[/* target */6] === "area") {
    match$3 = /* tuple */[
      outerRegion[/* width */2],
      outerRegion[/* height */3],
      0.0,
      0.0
    ];
  } else if (innerRegion) {
    var r = innerRegion[0];
    match$3 = /* tuple */[
      r[/* width */2],
      r[/* height */3],
      outerRegion[/* x */0] - r[/* x */0],
      outerRegion[/* y */1] - r[/* y */1]
    ];
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "no innner region for text with target = 'content'"
        ];
  }
  var regionHeight = match$3[1];
  var regionWidth = match$3[0];
  var imageX = 0.5 * regionWidth - 0.5 * dWidth;
  var imageY = 0.5 * regionHeight - 0.5 * dHeight;
  var match$4;
  if (decorator[/* uniScaling */5]) {
    var ratio = Caml_primitive.caml_float_max(regionWidth / dWidth, regionHeight / dHeight);
    var scaleX = ratio * decorator[/* offsetScale */4];
    var scaleY = ratio * decorator[/* offsetScale */4];
    match$4 = /* tuple */[
      scaleX,
      scaleY
    ];
  } else {
    var scaleX$1 = regionWidth / dWidth * decorator[/* offsetScale */4];
    var scaleY$1 = regionHeight / dHeight * decorator[/* offsetScale */4];
    match$4 = /* tuple */[
      scaleX$1,
      scaleY$1
    ];
  }
  var sy = match$4[1];
  var sx = match$4[0];
  var tx = regionWidth * decorator[/* offsetX */2] - 0.5 * regionWidth * (sx - 1) - match$3[2];
  var ty = regionHeight * decorator[/* offsetY */3] - 0.5 * regionHeight * (sy - 1) - match$3[3];
  return "\n  <g opacity=\"" + (String(decorator[/* element */1][/* alpha */0]) + ("\" transform=\"matrix(" + (String(sx) + (" 0 0 " + (String(sy) + (" " + (String(tx) + (" " + (String(ty) + (")\">\n    <g transform=\"translate(" + (String(imageX) + (" " + (String(imageY) + (")\">\n    " + (String(svgOut) + "\n    </g>\n  </g>\n  ")))))))))))))));
}

function renderDecorators(innerRegion, outerRegion, dMap, parent, decorators) {
  var front = List.fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", List.map((function (param) {
              return renderDecorator(dMap, innerRegion, outerRegion, param);
            }), List.filter((function (d) {
                    return +(d[/* level */7] === "front");
                  }))(decorators)));
  var back = List.fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", List.map((function (param) {
              return renderDecorator(dMap, innerRegion, outerRegion, param);
            }), List.filter((function (d) {
                    return +(d[/* level */7] === "back");
                  }))(decorators)));
  return back + (parent + front);
}

function renderLayer(dMap, layerElement) {
  var match = layerElement[/* decorators */2];
  var decorator = match && !match[1] ? renderDecorator(dMap, /* None */0, layerElement[/* region */1], match[0]) : "";
  return "\n  " + (String(decorator) + "\n  ");
}

function renderTextCell(textElement, cell) {
  var fill = textElement[/* colorScheme */5][/* textColor */0];
  return "\n  <tspan\n    x=\"" + (String(cell[/* x */9]) + ("\"\n    y=\"" + (String(cell[/* y */10]) + ("\"\n    width=\"" + (String(cell[/* width */8]) + ("\"\n    height=\"" + (String(cell[/* height */3]) + ("\"\n    fill=\"" + (String(fill) + ("\"\n    style=\"font-size:" + (String(cell[/* fontSize */2]) + ("px;font-family:" + (String(cell[/* fontFamily */1]) + ("\"\n    alignment-baseline=\"hanging\"\n  >" + (String(cell[/* text */7]) + "</tspan>\n  ")))))))))))))));
}

function renderTextLine(textElement, line) {
  var renderData = textElement[/* renderData */2];
  var outerRegion = textElement[/* region */1];
  var innerRegion = renderData[/* region */0];
  var translateX = innerRegion[/* x */0] - outerRegion[/* x */0];
  var translateY = innerRegion[/* y */1] - outerRegion[/* y */1];
  var chars = List.fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", List.map((function (param) {
              return renderTextCell(textElement, param);
            }), line[/* cells */0]));
  return "\n  <text\n    transform=\"translate(" + (String(translateX) + (" " + (String(translateY) + (") rotate(" + (String(line[/* rotate */2]) + (" " + (String(line[/* rotateCenterX */3]) + (" " + (String(line[/* rotateCenterY */4]) + (")\"\n  >\n    " + (String(chars) + "\n  </text>\n  ")))))))))));
}

function renderText(dMap, textElement) {
  var renderData = textElement[/* renderData */2];
  var renderDataElement = renderData[/* elements */1];
  var outerRegion = textElement[/* region */1];
  var innerRegion = renderData[/* region */0];
  var regionX = outerRegion[/* x */0];
  var regionY = outerRegion[/* y */1];
  var rotateX = outerRegion[/* width */2] / 2.0;
  var rotateY = outerRegion[/* height */3] / 2.0;
  var lines = List.fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", List.map((function (param) {
              return renderTextLine(textElement, param);
            }), renderDataElement[/* lines */0]));
  var children = renderDecorators(/* Some */[innerRegion], outerRegion, dMap, lines, textElement[/* decorators */6]);
  return "\n  <g\n    transform=\"translate(" + (String(regionX) + (", " + (String(regionY) + (") rotate(" + (String(textElement[/* rotate */3]) + (" " + (String(rotateX) + (" " + (String(rotateY) + (")\"\n    opacity=\"" + (String(textElement[/* alpha */4]) + ("\"\n  >\n  " + (String(children) + "\n  </g>\n  ")))))))))))));
}

function renderImage(dMap, imageElement) {
  var imgBox = imageElement[/* imgBox */4];
  var content = imageElement[/* content */3];
  var region = imageElement[/* region */1];
  var uri = content[/* uri */0];
  var height = imgBox[/* height */3];
  var width = imgBox[/* width */2];
  var match = imageElement[/* rotate */6];
  var rotate = match ? match[0] : 0.0;
  var match$1 = imageElement[/* alpha */7];
  var alpha = match$1 ? match$1[0] : 1.0;
  var regionX = region[/* x */0];
  var regionY = region[/* y */1];
  var regionWidth = region[/* width */2];
  var regionHeight = region[/* height */3];
  var regionCenterX = 0.5 * regionWidth;
  var regionCenterY = 0.5 * regionHeight;
  var imageX = -0.5 * width;
  var imageY = -0.5 * height;
  var x = imgBox[/* x */0] + regionCenterX;
  var y = imgBox[/* y */1] + regionCenterY;
  var createClipPath = function (shape) {
    var clipPathId = "image-clip-path-" + imageElement[/* id */0];
    var clipPath = "\n    <defs>\n      <clipPath id=\"" + (String(clipPathId) + ("\">\n      " + (String(shape) + "\n      </clipPath>\n    </defs>\n    ")));
    return /* tuple */[
            clipPath,
            "clip-path=\"url(#" + (String(clipPathId) + ")\"")
          ];
  };
  var match$2 = imageElement[/* mask */8];
  var match$3;
  var exit = 0;
  if (match$2) {
    if (match$2[0][/* type_ */0] === "circle") {
      var r = (
        regionWidth < regionHeight ? regionWidth : regionHeight
      ) / 2.0;
      match$3 = createClipPath("<circle cx=\"" + (String(x) + ("\" cy=\"" + (String(y) + ("\" r=\"" + (String(r) + "\" />"))))));
    } else {
      exit = 1;
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    match$3 = content[/* fit */1] ? /* tuple */[
        "",
        ""
      ] : createClipPath("<rect x=\"0\" y=\"0\" width=\"" + (String(regionWidth) + ("\" height=\"" + (String(regionHeight) + "\" />"))));
  }
  var image = "\n  " + (String(match$3[0]) + ("\n  <g " + (String(match$3[1]) + (">\n    <g transform=\"matrix(" + (String(imgBox[/* scaleX */4]) + (" 0 0 " + (String(imgBox[/* scaleY */5]) + (" " + (String(x) + (" " + (String(y) + (")\">\n      <image\n        xlink:href=\"" + (String(uri) + ("\"\n        width=\"" + (String(width) + ("\"\n        height=\"" + (String(height) + ("\"\n        transform=\"translate(" + (String(imageX) + (" " + (String(imageY) + ")\"\n      />\n    </g>\n  </g>\n  ")))))))))))))))))))));
  var children = renderDecorators(/* None */0, region, dMap, image, imageElement[/* decorators */9]);
  return "\n  <g\n    transform=\"translate(" + (String(regionX) + (" " + (String(regionY) + (") rotate(" + (String(rotate) + (" " + (String(regionCenterX) + (" " + (String(regionCenterY) + (")\"\n    opacity=\"" + (String(alpha) + ("\"\n  >\n  " + (String(children) + "\n  </g>\n  ")))))))))))));
}

function renderBackground(backgroundElement) {
  var match = backgroundElement[/* region */1];
  var color = backgroundElement[/* content */2][/* color */0];
  var fill = color === "" ? "#fff" : color;
  return "\n  <rect x=\"" + (String(match[/* x */0]) + ("\" y=\"" + (String(match[/* y */1]) + ("\" width=\"" + (String(match[/* width */2]) + ("\" height=\"" + (String(match[/* height */3]) + ("\" fill=\"" + (String(fill) + "\" />\n  ")))))))));
}

function renderMask(maskElement) {
  var match = maskElement[/* region */3];
  return "\n  <rect x=\"" + (String(match[/* x */0]) + ("\" y=\"" + (String(match[/* y */1]) + ("\" width=\"" + (String(match[/* width */2]) + ("\" height=\"" + (String(match[/* height */3]) + ("\" fill=\"" + (String(maskElement[/* color */1]) + ("\" opacity=\"" + (String(maskElement[/* alpha */2]) + "\" />\n  ")))))))))));
}

function renderSvgElement(svgElement) {
  var region = svgElement[/* region */2];
  var uri = svgElement[/* content */1][/* uri */0];
  return "\n  <g transform=\"matrix(" + (String(svgElement[/* scaleX */6]) + (" 0 0 " + (String(svgElement[/* scaleY */7]) + (" " + (String(region[/* x */0]) + (" " + (String(region[/* y */1]) + (")\" opacity=\"" + (String(svgElement[/* alpha */5]) + ("\">\n    <image href=\"" + (String(uri) + ("\" width=\"" + (String(svgElement[/* width */3]) + ("\" height=\"" + (String(svgElement[/* height */4]) + "\" />\n  </g>\n  ")))))))))))))));
}

function renderElement(dMap, element) {
  if (typeof element === "number") {
    return "";
  } else {
    switch (element.tag | 0) {
      case 0 : 
          return renderBackground(element[0]);
      case 1 : 
          return renderImage(dMap, element[0]);
      case 2 : 
          return renderText(dMap, element[0]);
      case 3 : 
          return renderLayer(dMap, element[0]);
      case 4 : 
          return renderMask(element[0]);
      case 5 : 
          return renderSvgElement(element[0]);
      
    }
  }
}

function createDecoratorMap(tree) {
  return Promise.all($$Array.of_list(List.map((function (d) {
                          return fetch(d[/* element */1][/* uri */5]).then((function (prim) {
                                          return prim.text();
                                        })).then((function (text) {
                                        return Promise.resolve(/* tuple */[
                                                    d[/* id */0],
                                                    text
                                                  ]);
                                      }));
                        }), List.concat(List.map((function (param) {
                                  if (typeof param === "number") {
                                    return /* [] */0;
                                  } else {
                                    switch (param.tag | 0) {
                                      case 1 : 
                                          return param[0][/* decorators */9];
                                      case 2 : 
                                          return param[0][/* decorators */6];
                                      case 3 : 
                                          return param[0][/* decorators */2];
                                      default:
                                        return /* [] */0;
                                    }
                                  }
                                }), tree[/* children */2]))))).then((function (entries) {
                return Promise.resolve(Js_dict.fromList($$Array.to_list(entries)));
              }));
}

function renderTree(dMap, tree) {
  var width = tree[/* size */1][/* width */0];
  var height = tree[/* size */1][/* height */1];
  var children = List.fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", List.map((function (param) {
              return renderElement(dMap, param);
            }), tree[/* children */2]));
  return "\n  <svg\n    version=\"1.1\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    viewBox=\"0 0 " + (String(width) + (" " + (String(height) + ("\"\n  >" + (String(children) + "</svg>\n  ")))));
}

var fonts = [/* None */0];

function loadFonts() {
  var match = fonts[0];
  if (match) {
    return match[0];
  } else {
    var fontsPromise = fetch("/api/v0/font").then((function (prim) {
              return prim.json();
            })).then((function (s) {
            return Promise.resolve(Js_dict.fromList(List.map((function (font) {
                                  return /* tuple */[
                                          font[/* font_family */1],
                                          font
                                        ];
                                }), Decode$BuckleSandbox.fonts(s)[/* data */0])));
          }));
    fonts[0] = /* Some */[fontsPromise];
    return fontsPromise;
  }
}

function processFonts(tree, fonts) {
  var fontMap = List.fold_left((function (dict, cell) {
          var match = dict[cell[/* fontFamily */1]];
          var text = match !== undefined ? match : "";
          dict[cell[/* fontFamily */1]] = text + cell[/* text */7];
          return dict;
        }), { }, List.concat(List.concat(List.map((function (textElement) {
                      return List.map((function (line) {
                                    return line[/* cells */0];
                                  }), textElement[/* renderData */2][/* elements */1][/* lines */0]);
                    }), List.fold_left((function (l, elm) {
                          if (typeof elm === "number" || elm.tag !== 2) {
                            return l;
                          } else {
                            return /* :: */[
                                    elm[0],
                                    l
                                  ];
                          }
                        }), /* [] */0, tree[/* children */2])))));
  return Youziku$BuckleSandbox.getBatchFontFace($$Array.of_list(List.fold_left((function (l, elm) {
                        if (elm) {
                          return /* :: */[
                                  elm[0],
                                  l
                                ];
                        } else {
                          return l;
                        }
                      }), /* [] */0, $$Array.to_list($$Array.map((function (fontFamily) {
                                var text = fontMap[fontFamily];
                                var accessKey = fonts[fontFamily][/* access_key */0];
                                if (accessKey) {
                                  return /* Some */[Youziku$BuckleSandbox.createTag(accessKey[0], text)];
                                } else {
                                  Font.createGoogleFontLink(fontFamily);
                                  return /* None */0;
                                }
                              }), Object.keys(fontMap))))));
}

function renderSvg(treeJson, optionsJson) {
  var options = Schema$BuckleSandbox.renderOptionsFromJs(optionsJson);
  var tree = Decode$BuckleSandbox.tree(treeJson);
  if (options[/* fonts */0]) {
    loadFonts(/* () */0).then((function (fonts) {
            processFonts(tree, fonts);
            return Promise.resolve(/* () */0);
          }));
  }
  return createDecoratorMap(tree).then((function (dMap) {
                return Promise.resolve(renderTree(dMap, tree));
              }));
}

exports.renderDecorator = renderDecorator;
exports.renderDecorators = renderDecorators;
exports.renderLayer = renderLayer;
exports.renderTextCell = renderTextCell;
exports.renderTextLine = renderTextLine;
exports.renderText = renderText;
exports.renderImage = renderImage;
exports.renderBackground = renderBackground;
exports.renderMask = renderMask;
exports.renderSvgElement = renderSvgElement;
exports.renderElement = renderElement;
exports.createDecoratorMap = createDecoratorMap;
exports.renderTree = renderTree;
exports.fonts = fonts;
exports.loadFonts = loadFonts;
exports.processFonts = processFonts;
exports.renderSvg = renderSvg;
/*  Not a pure module */
