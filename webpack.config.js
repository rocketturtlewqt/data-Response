const { resolve } = require('path');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {
                  version: '3'
                },
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  edge: '17',
                  safari: '10'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  devServer: {
    port: 9090,
    contentBase: 'www'
  }
}