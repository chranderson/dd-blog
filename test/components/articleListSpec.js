jest.dontMock('../../src/components/ArticleList.jsx');
jest.dontMock('../StubRouter.js');
jest.dontMock('object-assign');
var React = require('react/addons');
var ArticleListComponent = require('../../src/components/ArticleList.jsx');
var TestUtils = React.addons.TestUtils;
var StubRouter = require('../StubRouter.js');
var shallowRenderer = TestUtils.createRenderer();

describe('AppComponent', function() {
	it('renders an article list', function() {
		ArticleListComponent = StubRouter(ArticleListComponent);
		shallowRenderer.render(<ArticleListComponent />)
		var articleList = shallowRenderer.getRenderOutput();
		expect(!!articleList).toBe(true);
	});
});