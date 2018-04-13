module.exports = {
  mode: 'production',
  entry: './src/main.bs.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    library: 'bundle',
    libraryTarget: 'umd',
  }
}
