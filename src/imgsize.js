const isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined'

function imgsize(src) {
  return new Promise(function (resolve, reject) {
    if (isNode) {
      resolve([0, 0])
    }
    var image = new Image()
    image.onload = function() {
      resolve([image.width, image.height]);
    };
    image.onerror = function() {
      reject()
    };
    image.src = src;
  })
};

export {
  imgsize
}
