const convert = require('koa-connect')
const proxy = require('http-proxy-middleware')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const internalIp = require('internal-ip')

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
    host: internalIp.v4.sync(),
    dev: {
      stats: {
        modules: false,
        chunks: false,
        assets: false,
      },
    },
    add: (app) => {
      app.use(convert(proxy('/api', { target: 'https://dev.arkie.cn', changeOrigin: true })))
    },
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

    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ]
}
