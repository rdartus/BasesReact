var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);


var theport = process.env.PORT || 8000;
var server_host = process.env.YOUR_HOST || 'localhost';

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(theport, server_host, function(err) {

  console.log(__dirname);

  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://'server_host+theport);
});
