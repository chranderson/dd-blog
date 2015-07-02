import React from "react";
import Router from 'react-router';
let DefaultRoute = Router.DefaultRoute;

// Components
import App from "./components/App.jsx";
import ArticleList from './components/ArticleList.jsx';
import Article from './components/Article.jsx';

let Route = Router.Route;

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="article" path="/article/:id" handler={Article}/>
    <DefaultRoute name="default" handler={ArticleList}/>
  </Route>
);

module.exports = routes;

// Still trying to figure out how to default one of the articles for the default route
