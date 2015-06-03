var express = require('express');
var path = require('path');
var routes = require('./routes');
var app = express();

// setup jsx 
require("node-jsx").install();

var config = {
	port: 8000
};

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/dist'));
app.set('views', __dirname + '/dist/');

// Routes
app.get('/', routes.index);

app.listen(config.port, function (err) {
  console.log("Server started; listening on port " + config.port);
});