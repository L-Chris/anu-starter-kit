
import 'antd/dist/antd.css'
import './index.css'
import {DatePicker} from 'antd'

const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')

var Page101 = require('./scenes/Page101')
var Page102 = require('./scenes/Page102')
var Page201 = require('./scenes/Page201')
var Page202 = require('./scenes/Page202')

var menus = [{
  id: 1,
  title: '模块一',
  sub: [{
    id: 101,
    title: '菜单1',
    to: '/'
  }, {
    id: 102,
    title: '菜单2',
    to: 'page102'
  }]
}, {
  id: 2,
  title: '模块一',
  sub: [{
    id: 201,
    title: '菜单1',
    to: 'page201'
  }, {
    id: 202,
    title: '菜单2',
    to: 'page202'
  }]
}]

const { Router, Route, IndexRoute, hashHistory } = ReactRouter;

function App (props) {
  return (
    <div>
      <DatePicker/>
      <div>{props.children}</div>
    </div>
  )
}

window.onload = function () {
  window.s = ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Page101}/>
        <Route path="page102" component={Page102}/>
        <Route path="page201" component={Page201}/>
        <Route path="page202" component={Page202}/>
      </Route>
    </Router>,
    document.getElementById('app')
  )
}

var innerStyles = {
  container: {
    // height: '100%'
  },
  main: {
    // height: '100%',
    // overflow: 'hidden'
  }
}