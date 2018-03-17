'use strict';


function renderOptionsToJs(param) {
  return {
          fonts: param[/* fonts */0]
        };
}

function renderOptionsFromJs(param) {
  return /* record */[/* fonts */param.fonts];
}

exports.renderOptionsToJs = renderOptionsToJs;
exports.renderOptionsFromJs = renderOptionsFromJs;
/* No side effect */
