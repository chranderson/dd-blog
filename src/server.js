// Reactjs and jsx utils

import React from 'react';
import Router from 'react-router';

// React App components and api
import routes from './routes.jsx';
import Api from './api/ServerApi';

// Express
import express from 'express';
let app = express();

// Some const
let BASEDIR = process.env.PWD

// Express App setup
app.set("views", BASEDIR + '/public');
app.set('view engine', 'jade');

app.use("/public", express.static(BASEDIR + "/public"));



// Express ROUTES

// Static routes
app.get('/', function (req, res) {
  Router.run(routes, '/', function (Handler) {
    let content = React.renderToString(React.createElement(Handler));
    let injected = { list: Api.getArticles()};
    res.render('index', {
      content: content,
      injectedScript: JSON.stringify(injected)
    });
  });
})

app.get('/article/:id', function (req, res, next) {
  let aid = req.params.id;
  Router.run(routes, '/article/' + aid , function (Handler) {
    let content = React.renderToString(React.createElement(Handler));
    let injected = { list: [Api.getArticle(aid)]};
    res.render('index', {
      content: content,
      injectedScript: JSON.stringify(injected)
    });
  });
});

// API routes
app.get('/api/article/:id', function (req, res, next) {
  let aid = req.params.id;
  let article = Api.getArticle(aid);
  res.send(JSON.stringify(article));
});

app.get('/api/articles', function (req, res, next) {
  let articles = Api.getArticles();
  res.send(JSON.stringify(articles));
});


module.exports = app;
