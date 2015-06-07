jest.dontMock('../../src/components/App.jsx');
var React = require('react/addons');
var AppComponent = require('../../src/components/App.jsx');
var TestUtils = React.addons.TestUtils;

describe('AppComponent', function() {
	it('renders a component', function() {
		var app = TestUtils.renderIntoDocument(<AppComponent />);
		expect(app.getDOMNode()).toBe(true);
	});
});