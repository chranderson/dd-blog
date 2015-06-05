jest.dontMock('../../src/js/components/app.js');
var React = require('react/addons');
var AppComponent = require('../../src/js/components/app.js');
var TestUtils = React.addons.TestUtils;

describe('AppComponent', function() {
	it('renders an h1 that says data from component!', function() {
		var app = TestUtils.renderIntoDocument(<AppComponent />);
		expect(app.getDOMNode().textContent).toBe('data from component!');
	});
});