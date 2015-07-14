import React from 'react';
import ArticleList from './ArticleList.jsx';
import Router from 'react-router';
import Header from './Header.jsx';

let Route = Router.Route, DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler, Link = Router.Link;

let App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
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
