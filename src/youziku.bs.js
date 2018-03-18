'use strict';


function createTag(key, content) {
  return {
          AccessKey: key,
          Content: content
        };
}

function getBatchFontFace(tags) {
  return $youzikuClient.getBatchFontFace({
              Tags: tags
            }, (function () {
                return /* () */0;
              }));
}

exports.createTag = createTag;
exports.getBatchFontFace = getBatchFontFace;
/* No side effect */
