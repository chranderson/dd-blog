import React from 'react';
import ArticleList from './ArticleList.jsx';
import Router from 'react-router';
let Route = Router.Route, DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler, Link = Router.Link;

let App = React.createClass({
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
