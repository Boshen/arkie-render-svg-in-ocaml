


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

export {
  createTag ,
  getBatchFontFace ,
  
}
/* No side effect */
