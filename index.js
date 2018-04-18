const json = require('./test/tree1.json');
const { renderSvg } = require('./src/main');
renderSvg(json, { fonts: true })
  .then((svg) => {
    const div = document.createElement('div');
    div.innerHTML = svg;
    document.body.appendChild(div);
  })
  .catch(console.error.bind(console));
