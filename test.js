const json = require('./tree.json');
const { renderSvg } = require('./src/main.bs');
renderSvg(json, { fonts: false, width: 1080, height: 1920 })
  .then(console.log.bind(console))
  .catch(console.error.bind(console));
