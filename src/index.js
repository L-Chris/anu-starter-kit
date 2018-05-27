require('es5-shim')
require('es5-shim/es5-sham')
require('console-polyfill')
require('./styles/index.scss')

const React = require('react')
const ReactDOM = require('react-dom')
const { Router, hashHistory } = require('react-router')
const routes = require('./router').default

window.onload = function () {
  window.s = ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('app')
  )
}