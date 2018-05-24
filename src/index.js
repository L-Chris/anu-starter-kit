require('antd/dist/antd.css')
require('./styles/index.scss')

const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const { Router, Route, IndexRoute, hashHistory } = ReactRouter

var Home = require('./views/home')
var LoginUser = require('./views/login/user')
var LoginStudent = require('./views/login/student')

window.onload = function () {
  window.s = ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <Route path="/login/user" component={LoginUser}/>
        <Route path="/login/student" component={LoginStudent}/>
      </Route>
    </Router>,
    document.getElementById('app')
  )
}