var objectAssign = require('object-assign');
var React        = require('react');
 
var ReactRouterContext = function ReactRouterContext(Component, props, stubs) {
  function RouterStub() {}
 
  objectAssign(RouterStub, {
    makePath: function makePath() {},
    makeHref: function makeHref() {},
    transitionTo: function transitionTo() {},
    replaceWith: function replaceWith() {},
    goBack: function goBack() {},
    getCurrentPath: function getCurrentPath() {},
    getCurrentRoutes: function getCurrentRoutes() {},
    getCurrentPathname: function getCurrentPathname() {},
    getCurrentParams: function getCurrentParams() {},
    getCurrentQuery: function getCurrentQuery() {},
    isActive: function isActive() {},
    getRouteAtDepth: function getRouteAtDepth() {},
    setRouteComponentAtDepth: function setRouteComponentAtDepth() {}
  }, stubs);
 
  return React.createClass({
    childContextTypes: {
      router: React.PropTypes.func,
      routeDepth: React.PropTypes.number
    },
 
    getChildContext: function getChildContext() {
      return {
        router: RouterStub,
        routeDepth: 0
      };
    },
 
    render: function render() {
      return React.createElement(Component, props);
    }
  });
};
 
module.exports = ReactRouterContext;