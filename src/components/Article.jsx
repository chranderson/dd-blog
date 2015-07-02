import React from 'react';
import Router from 'react-router';

import ArticleStore from '../stores/ArticleStore';

import Showdown from 'showdown';
let converter = new Showdown.converter();

module.exports = React.createClass({

  mixins: [Router.State],

  getInitialState: function () {
    let articleId = this.context.router.getCurrentParams().id;
    return {
      articleId: articleId,
      article: ArticleStore.findById(articleId)
    };
  },

  componentWillMount: function () {
    ArticleStore.addChangeListener(this._change);
  },

  render: function () {
    let article = this.state.article;
    return (
      <div>
        <div dangerouslySetInnerHTML={{
            __html: converter.makeHtml(article.content)
          }} />
      </div>
    );
  },

  _change: function () {
    if (!this.isMounted()) return false;

    let articleId = this.getParams().id;
    this.setState({
      article: ArticleStore.findById(articleId),
      articleId: articleId
    });
  }
});
