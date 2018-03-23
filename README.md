# Arkie Svg Render

Record Tree -> Svg string render

```
const tree = require('./tree.json');
const { renderSvg } = require('svg-renderer');
renderSvg(tree, { fonts: false, width: 1080, height: 1920 })
  .then(console.log.bind(console))
  .catch(console.error.bind(console));
```
