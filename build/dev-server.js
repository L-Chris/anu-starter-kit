var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.conf');
var app = express();
var compiler = webpack(config);

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

app.use(express.static(resolve('dist')))
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: '/dist'
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
  res.sendFile(resolve('dist/index.html'));
});

app.listen(8080, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8080');
});