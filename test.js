const json = require('./tree.json');
const { renderSvg } = require('./src/main.bs');
renderSvg(json, { fonts: false })
  .then(console.log.bind(console))
  .catch(console.error.bind(console));
