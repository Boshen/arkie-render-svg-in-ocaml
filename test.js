const json = require('./tree.json');
const { renderSvg } = require('./src/main.bs');
renderSvg(json, { fonts: false, width: 1080, height: 1920 })
  .then((svg) => {
    const div = document.createElement('div');
    div.innerHTML = svg;
    document.body.appendChild(div);
  })
  .catch(console.error.bind(console));
