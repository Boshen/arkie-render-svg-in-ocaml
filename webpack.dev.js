const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: './index.js',

  devtool: 'eval-source-map',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  serve: {
    content: [__dirname + '/dist'],
    dev: {
      stats: {
        modules: false,
        chunks: false,
        assets: false,
      },
    }
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),

    new HtmlWebpackPlugin(),
  ]
}
