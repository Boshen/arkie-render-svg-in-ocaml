# Arkie Svg Render

Record Tree -> Svg string render

```
const tree = require('./tree.json');
const { renderSvg } = require('svg-renderer');
renderSvg(tree)
  .then(console.log.bind(console))
  .catch(console.error.bind(console));
```
