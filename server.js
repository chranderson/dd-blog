var express = require('express');
var path = require('path');
var routes = require('./routes');
var React = require('react');
var AppComponent = React.createFactory(require('./src/js/components/app.js'));
var app = express();

// setup jsx
require("node-jsx").install();

var config = {
	port: 8000
};

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/dist'));
app.set('views', __dirname + '/dist/');

function home(req, res) {
	var data = req.params.data || 'no data!';
	var comp = AppComponent({data: data});
	var reactHtml = React.renderToString(comp);
	res.render('index.ejs', {reactApp: reactHtml});
}

// Routes
app.get('/', home);

app.listen(config.port, function (err) {
  console.log("Server started; listening on port " + config.port);
});