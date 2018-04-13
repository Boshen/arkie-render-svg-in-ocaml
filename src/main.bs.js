

import * as List from "bs-platform/lib/es6/list.js";
import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Font from "./font";
import * as Printf from "bs-platform/lib/es6/printf.js";
import * as $$String from "bs-platform/lib/es6/string.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Imgsize from "./imgsize";
import * as Caml_format from "bs-platform/lib/es6/caml_format.js";
import * as Caml_primitive from "bs-platform/lib/es6/caml_primitive.js";
import * as Decode$BuckleSandbox from "./decode.bs.js";
import * as Youziku$BuckleSandbox from "./youziku.bs.js";
import * as Caml_builtin_exceptions from "bs-platform/lib/es6/caml_builtin_exceptions.js";

function renderSvgDecorator(decorator, svg, dimen) {
  var s = svg.replace(new RegExp("<svg[\\s\\S]*svg>"), "$&").replace(new RegExp("<svg"), "<svg width=\"" + (String(dimen[0]) + ("\" height=\"" + (String(dimen[1]) + "\""))));
  var match = decorator[/* element */1][/* colors */7];
  if (match) {
    var colors = match[0];
    return s.replace(new RegExp(Curry._1(Printf.sprintf(/* Format */[
                            /* Char_literal */Block.__(12, [
                                /* "(" */40,
                                /* String */Block.__(2, [
                                    /* No_padding */0,
                                    /* Char_literal */Block.__(12, [
                                        /* ")" */41,
                                        /* End_of_format */0
                                      ])
                                  ])
                              ]),
                            "(%s)"
                          ]), $$String.concat("|", List.map((function (c) {
                                  return c[/* origin */0];
                                }), colors))), "ig"), (function (m, _, _$1, _$2) {
                  return List.find((function (c) {
                                  return +($$String.uppercase(c[/* origin */0]) === $$String.uppercase(m));
                                }), colors)[/* custom */1];
                }));
  } else {
    return s;
  }
}

function renderImageDecorator(decorator, dimen) {
  var uri = decorator[/* element */1][/* uri */5];
  return "\n  <image xlink:href=\"" + (String(uri) + ("\" width=\"" + (String(dimen[0]) + ("\" height=\"" + (String(dimen[1]) + "\" />\n  ")))));
}

function renderDecorator(dMap, innerRegion, outerRegion, decorator) {
  var match;
  if (decorator[/* target */6] === "area") {
    match = /* tuple */[
      outerRegion[/* width */2],
      outerRegion[/* height */3],
      0.0,
      0.0
    ];
  } else if (innerRegion) {
    var r = innerRegion[0];
    match = /* tuple */[
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
  var regionHeight = match[1];
  var regionWidth = match[0];
  var match$1 = dMap[decorator[/* id */0]];
  var match$2;
  if (match$1 !== undefined) {
    var dimen = match$1[1];
    var _type = decorator[/* element */1][/* _type */8];
    switch (_type) {
      case "bitmap" : 
          match$2 = /* tuple */[
            renderImageDecorator(decorator, dimen),
            dimen
          ];
          break;
      case "svg" : 
          match$2 = /* tuple */[
            renderSvgDecorator(decorator, match$1[0], dimen),
            dimen
          ];
          break;
      default:
        throw [
              Caml_builtin_exceptions.failure,
              "unknown svg decorator type: " + _type
            ];
    }
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "decorator does not exist for " + decorator[/* id */0]
        ];
  }
  var match$3 = match$2[1];
  var dHeight = match$3[1];
  var dWidth = match$3[0];
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
  var tx = regionWidth * decorator[/* offsetX */2] - 0.5 * regionWidth * (sx - 1) - match[2];
  var ty = regionHeight * decorator[/* offsetY */3] - 0.5 * regionHeight * (sy - 1) - match[3];
  return "\n  <g opacity=\"" + (String(decorator[/* element */1][/* alpha */0]) + ("\" transform=\"matrix(" + (String(sx) + (" 0 0 " + (String(sy) + (" " + (String(tx) + (" " + (String(ty) + (")\">\n    <g transform=\"translate(" + (String(imageX) + (" " + (String(imageY) + (")\">\n    " + (String(match$2[0]) + "\n    </g>\n  </g>\n  ")))))))))))))));
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
  return "\n  <tspan\n    x=\"" + (String(cell[/* x */9]) + ("\"\n    y=\"" + (String(cell[/* y */10]) + ("\"\n    fill=\"" + (String(fill) + ("\"\n    alignment-baseline=\"hanging\"\n    style=\"font-size:" + (String(cell[/* fontSize */2]) + ("px;font-family:" + (String(cell[/* fontFamily */1]) + ("\"\n  >" + (String(cell[/* text */7]) + "</tspan>\n  ")))))))))));
}

function renderTextLine(textElement, line) {
  var rotateCenterY = line[/* rotateCenterY */4];
  var rotateCenterX = line[/* rotateCenterX */3];
  var chars = List.fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", List.map((function (param) {
              return renderTextCell(textElement, param);
            }), line[/* cells */0]));
  return "\n  <text\n    transform=\"translate(" + (String(rotateCenterX) + (" " + (String(rotateCenterY) + (") rotate(" + (String(line[/* rotate */2]) + (" " + (String(rotateCenterX) + (" " + (String(rotateCenterY) + (")\"\n  >\n    " + (String(chars) + "\n  </text>\n  ")))))))))));
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
  var match = imageElement[/* imgBox */4];
  var imgBox = match ? match[0] : /* float array */[
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ];
  var content = imageElement[/* content */3];
  var region = imageElement[/* region */1];
  var uri = content[/* uri */0];
  var height = imgBox[/* height */3];
  var width = imgBox[/* width */2];
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
  var match$1 = imageElement[/* mask */7];
  var match$2;
  var exit = 0;
  if (match$1 && match$1[0][/* type_ */0] === "circle") {
    var r = (
      regionWidth < regionHeight ? regionWidth : regionHeight
    ) / 2.0;
    match$2 = createClipPath("<circle cx=\"" + (String(x) + ("\" cy=\"" + (String(y) + ("\" r=\"" + (String(r) + "\" />"))))));
  } else {
    exit = 1;
  }
  if (exit === 1) {
    match$2 = content[/* fit */1] ? /* tuple */[
        "",
        ""
      ] : createClipPath("<rect x=\"0\" y=\"0\" width=\"" + (String(regionWidth) + ("\" height=\"" + (String(regionHeight) + "\" />"))));
  }
  var image = "\n  " + (String(match$2[0]) + ("\n  <g " + (String(match$2[1]) + (">\n    <g transform=\"matrix(" + (String(imgBox[/* scaleX */4]) + (" 0 0 " + (String(imgBox[/* scaleY */5]) + (" " + (String(x) + (" " + (String(y) + (")\">\n      <image\n        xlink:href=\"" + (String(uri) + ("\"\n        width=\"" + (String(width) + ("\"\n        height=\"" + (String(height) + ("\"\n        transform=\"translate(" + (String(imageX) + (" " + (String(imageY) + ")\"\n      />\n    </g>\n  </g>\n  ")))))))))))))))))))));
  var children = renderDecorators(/* None */0, region, dMap, image, imageElement[/* decorators */8]);
  return "\n  <g\n    transform=\"translate(" + (String(regionX) + (" " + (String(regionY) + (") rotate(" + (String(imageElement[/* rotate */5]) + (" " + (String(regionCenterX) + (" " + (String(regionCenterY) + (")\"\n    opacity=\"" + (String(imageElement[/* alpha */6]) + ("\"\n  >\n  " + (String(children) + "\n  </g>\n  ")))))))))))));
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
  return "\n  <g transform=\"matrix(" + (String(svgElement[/* scaleX */6]) + (" 0 0 " + (String(svgElement[/* scaleY */7]) + (" " + (String(region[/* x */0]) + (" " + (String(region[/* y */1]) + (")\" opacity=\"" + (String(svgElement[/* alpha */5]) + ("\">\n    <image xlink:href=\"" + (String(uri) + ("\" width=\"" + (String(svgElement[/* width */3]) + ("\" height=\"" + (String(svgElement[/* height */4]) + "\" />\n  </g>\n  ")))))))))))))));
}

function renderElement(dMap, param) {
  if (typeof param === "number") {
    return "";
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return renderBackground(param[0]);
      case 1 : 
          return renderImage(dMap, param[0]);
      case 2 : 
          return renderText(dMap, param[0]);
      case 3 : 
          return renderLayer(dMap, param[0]);
      case 4 : 
          return renderMask(param[0]);
      case 5 : 
          return renderSvgElement(param[0]);
      
    }
  }
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

function getSvgDimension(svg) {
  var match = re.exec(svg);
  if (match !== null) {
    var coords = List.map((function (d) {
            if (d == null) {
              return 0.0;
            } else {
              return Caml_format.caml_float_of_string(d);
            }
          }), List.tl($$Array.to_list(match)));
    return /* tuple */[
            List.nth(coords, 2) - List.nth(coords, 0),
            List.nth(coords, 3) - List.nth(coords, 1)
          ];
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "decorator does not have viewBox for decorator"
        ];
  }
}

function createDecoratorMap(tree) {
  return Promise.all($$Array.of_list(List.map((function (d) {
                          var _type = d[/* element */1][/* _type */8];
                          switch (_type) {
                            case "bitmap" : 
                                return Imgsize.imgsize(d[/* element */1][/* uri */5]).then((function (dimen) {
                                              return Promise.resolve(/* tuple */[
                                                          d[/* id */0],
                                                          /* tuple */[
                                                            d[/* element */1][/* uri */5],
                                                            dimen
                                                          ]
                                                        ]);
                                            }));
                            case "svg" : 
                                return fetch(d[/* element */1][/* uri */5]).then((function (prim) {
                                                return prim.text();
                                              })).then((function (text) {
                                              return Promise.resolve(/* tuple */[
                                                          d[/* id */0],
                                                          /* tuple */[
                                                            text,
                                                            getSvgDimension(text)
                                                          ]
                                                        ]);
                                            }));
                            default:
                              throw [
                                    Caml_builtin_exceptions.failure,
                                    "unknown svg decorator type: " + _type
                                  ];
                          }
                        }), List.concat(List.map((function (param) {
                                  if (typeof param === "number") {
                                    return /* [] */0;
                                  } else {
                                    switch (param.tag | 0) {
                                      case 1 : 
                                          return param[0][/* decorators */8];
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

function renderTree(dMap, svgWidth, svgHeight, tree) {
  var outerWidth = svgWidth ? "width=\"" + (String(svgWidth[0]) + "\"") : "";
  var outerHeight = svgHeight ? "height=\"" + (String(svgHeight[0]) + "\"") : "";
  var match = tree[/* size */1];
  var match$1 = List.partition((function (param) {
          if (typeof param === "number" || param.tag) {
            return /* false */0;
          } else {
            return /* true */1;
          }
        }), tree[/* children */2]);
  var bg = List.fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", List.map((function (param) {
              return renderElement(dMap, param);
            }), match$1[0]));
  var children = List.fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", List.map((function (param) {
              return renderElement(dMap, param);
            }), match$1[1]));
  return "\n  <svg\n    version=\"1.1\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    viewBox=\"0 0 " + (String(match[/* width */0]) + (" " + (String(match[/* height */1]) + ("\" " + (String(outerWidth) + (" " + (String(outerHeight) + ("\n  >\n  " + (String(bg) + ("\n  " + (String(children) + "\n  </svg>\n  ")))))))))));
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
                    }), List.fold_left((function (l, param) {
                          if (typeof param === "number" || param.tag !== 2) {
                            return l;
                          } else {
                            return /* :: */[
                                    param[0],
                                    l
                                  ];
                          }
                        }), /* [] */0, tree[/* children */2])))));
  return Youziku$BuckleSandbox.getBatchFontFace($$Array.of_list(List.fold_left((function (l, param) {
                        if (param) {
                          return /* :: */[
                                  param[0],
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
  var options = Decode$BuckleSandbox.decodeOptions(optionsJson);
  var tree = Decode$BuckleSandbox.tree(treeJson);
  var match = options[/* fonts */0];
  if (match && match[0] !== 0) {
    loadFonts(/* () */0).then((function (fonts) {
            processFonts(tree, fonts);
            return Promise.resolve(/* () */0);
          }));
  } else {
    Promise.resolve(/* () */0);
  }
  return createDecoratorMap(tree).then((function (dMap) {
                return Promise.resolve(renderTree(dMap, options[/* width */1], options[/* height */2], tree));
              }));
}

export {
  renderSvgDecorator ,
  renderImageDecorator ,
  renderDecorator ,
  renderDecorators ,
  renderLayer ,
  renderTextCell ,
  renderTextLine ,
  renderText ,
  renderImage ,
  renderBackground ,
  renderMask ,
  renderSvgElement ,
  renderElement ,
  floatRe ,
  re ,
  getSvgDimension ,
  createDecoratorMap ,
  renderTree ,
  fonts ,
  loadFonts ,
  processFonts ,
  renderSvg ,
  
}
/* re Not a pure module */
