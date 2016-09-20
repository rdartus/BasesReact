var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var mongoose = require('mongoose');
var app = express();
var compiler = webpack(config);


var db_uri =
  process.env.MONGODB_URI ||
  'mongodb://localhost/reduxtagram';

var theport = process.env.PORT || 8000;
var server_host = process.env.YOUR_HOST || 'localhost';

mongoose.connect(db_uri, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + db_uri + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + db_uri);
  }
});

app.use('/api', require('./server/routes/api'));

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));
//
// app.use(require('webpack-hot-middleware')(compiler));
//
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(theport, function(err) {

  console.log(__dirname);

  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at '+theport);
});
