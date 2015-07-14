import React from 'react';
import Router from 'react-router';
import Nav from './Nav.jsx';

let Route = Router.Route, DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler, Link = Router.Link;

let Header = React.createClass({
	render: function() {
		return (
			<header className={"cf"}>
	          <h1>
	            <Link to="app">The Digital Dept.</Link>
	          </h1>
	          	<Nav />
	        </header>
		);
	}
});

export default Header;

