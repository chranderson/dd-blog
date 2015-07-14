jest.dontMock('../src/browser.js');
jest.dontMock('react-router');
jest.dontMock('../src/routes.jsx');
jest.dontMock('../src/action/RoutesAction');

describe('AppComponent', function() {
	var React;
	var Browser;
	var TestUtils;
	var Router;
	var RoutesAction;
	var routes;

	it('changes routes to articles/article list', function() {
		Router = require('react-router');
		React = require('react/addons');
		Browser = require('../src/browser.js');
		TestUtils = React.addons.TestUtils;
		RoutesAction = require('../src/action/RoutesAction');
		routes = require('../src/routes.jsx');


		Router.run(routes, '/article/first_article', function () {
			TestUtils.renderIntoDocument(<Article/>);
			let activeRoute = RoutesAction.findActiveRoute('first_article');

		  // Every time there's a route change
		  // ask RoutesAction to manage the flow
		  RoutesAction.triggerRouteChange('article', '{id: first_article}');
		});

	});
});