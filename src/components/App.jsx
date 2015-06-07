var React = require('react');
var ArticleList = require('./ArticleList.jsx');
var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler, Link = Router.Link;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header className={"cf"}>
          <h1>
            <Link to="app">The Digital Dept.</Link>
          </h1>
          <nav>
          </nav>
        </header>
        <section className={"article-list"}>
          <ArticleList />
        </section>
        <section className={"content markdown-body"}>
          <RouteHandler/>
        </section>
      </div>
    );
  }
});

module.exports = App;
