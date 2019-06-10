'use strict';

const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mainHtmlPlugin = new HtmlWebPackPlugin(
  {template: './src/index.html', filename: './index.html', chunks: ['main']});

const mixinTestHtmlPlugin = new HtmlWebPackPlugin(
  {template: './src/sass-mixin-test/index.html', filename: './sass-mixin-test/index.html', chunks: ['sass']});  

const copyPlugin = new CopyWebpackPlugin([
  {from: 'public', to: 'public'},
  {from: 'static', to: 'static'}
]);

module.exports = {
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/, use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }
        ]
      }
    ]
  },
  entry: {
    main: './src/index.js',
    sass: './src/sass-mixin-test/index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [mainHtmlPlugin, mixinTestHtmlPlugin, copyPlugin]
};
