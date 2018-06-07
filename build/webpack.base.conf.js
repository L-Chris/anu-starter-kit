'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TransferWebpackPlugin = require('transfer-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    index: './src/index'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    alias: {
      react: "anujs/dist/ReactIE.js",
      "react-dom": "anujs/dist/ReactIE.js",
      'prop-types': 'anujs/lib/ReactPropTypes',
      'devtools' : "anujs/lib/devtools",
      'create-react-class': 'anujs/lib/createClass',
      '@': resolve('src')
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }],
    postLoaders: [{
      test: /\.js$/,
      loader: "es3ify-loader"
    }]
  },
  sassResources: ['./src/styles/vars.scss', './src/styles/mixins.scss']
}