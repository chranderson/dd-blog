import React from 'react';
import ArticleStore from '../stores/ArticleStore';

let Link = require('react-router').Link;

let ArticleList = React.createClass({
  getInitialState: function () {
    return {
      articles: ArticleStore.getData()
    };
  },

  componentWillMount: function () {
    ArticleStore.addChangeListener(this._change);
  },

  componentWillUnmount: function () {
    ArticleStore.removeChangeListener(this._change);
  },

  render: function () {
    let articles = this.state.articles;
    return (
      <div>
        <h1>{"Articles"}</h1>
        <ul>
          {
            articles.map(function (art) {
              return (<li key={art.id}><Link to="article" params={{id: art.id}}>{art.id}</Link></li>)
            })
          }
        </ul>
      </div>
    );
  },

  _change: function () {
    if (!this.isMounted()) return false;
    this.setState({
      articles: ArticleStore.getData()
    });
  }
});

module.exports = ArticleList;
