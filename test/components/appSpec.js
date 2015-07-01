jest.dontMock('../../src/components/App.jsx');
jest.dontMock('../StubRouter.js');
jest.dontMock('object-assign');
var React = require('react/addons');
var AppComponent = require('../../src/components/App.jsx');
var TestUtils = React.addons.TestUtils;
var StubRouter = require('../StubRouter.js');

describe('AppComponent', function() {
	it('renders a component', function() {
		AppComponent = StubRouter(AppComponent);
		var app = TestUtils.renderIntoDocument(<AppComponent />);

		expect(!!app.getDOMNode()).toBe(true);
	});
});