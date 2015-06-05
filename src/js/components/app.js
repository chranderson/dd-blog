var React = require('react');

var APP = React.createClass({
	getInitialState: function() {
		return {data: 'data from component!'};
	},
	render: function() {
		return <h1>{this.state.data}</h1>
	}
});

module.exports = APP;