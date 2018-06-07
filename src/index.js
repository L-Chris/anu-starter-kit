require('es5-shim')
require('es5-shim/es5-sham')
require('babel-polyfill')
require('console-polyfill')
require('./styles/index.scss')

const React = require('react')
const ReactDOM = require('react-dom')
React.createClass = require('create-react-class')
const { Router, hashHistory } = require('react-router')
const routes = require('./router')

window.onload = function () {
  window.s = ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('app')
  )
}