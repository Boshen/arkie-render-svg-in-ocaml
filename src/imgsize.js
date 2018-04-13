function imgsize(src) {
  return new Promise(function (resolve, reject) {
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
