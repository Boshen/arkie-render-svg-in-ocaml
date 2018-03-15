const json = require('./tree.json');
const { renderSvg } = require('./src/main.bs');
renderSvg(json)
  .then(console.log.bind(console))
  .catch(console.error.bind(console));
