var JSX = require('node-jsx').install();
      React = require('react');

module.exports = {
	index: function(req, res) {
		res.render('index')
	}
}