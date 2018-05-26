// require('antd/dist/antd.css')
require('./styles/index.scss')
require('./utils/polyfill')

const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const routes = require('./router')
const { Router, hashHistory } = ReactRouter

window.onload = function () {
  window.s = ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('app')
  )
}