jest.dontMock('../../src/components/Article.jsx');
jest.dontMock('../StubRouter.js');
jest.dontMock('object-assign');
var React = require('react/addons');
var ArticleComponent = require('../../src/components/Article.jsx');
var TestUtils = React.addons.TestUtils;
var StubRouter = require('../StubRouter.js');
var shallowRenderer = TestUtils.createRenderer();

describe('AppComponent', function() {
	it('renders an article', function() {
		ArticleComponent = StubRouter(ArticleComponent);
		shallowRenderer.render(<ArticleComponent />)
		var article = shallowRenderer.getRenderOutput();
		expect(!!article).toBe(true);
	});
});