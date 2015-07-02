import merge from 'merge';
let EventEmitter = require('events').EventEmitter;

import Api from '../api/ServerApi.js';
import AppDispatcher from '../dispatcher/Dispatcher';

let _data = Api.getArticles();

function loadData(data) {
  _data = data;
};

function loadArticle(article) {
  let exist = false;
  _data.forEach(function (art, index) {
    if (art.id == article.id) {
      Api.setArticle(article, index);
      exist = true;
    }
  });

  if(!exist) _data.push(article);
};

let CHANGE_EVENT = "change";

let ArticleStore = merge({}, EventEmitter.prototype, {

  findById: function (id) {
    return Api.getArticle(id);
  },

  getData: function () {
    return _data;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
  * @param {function} callback
  */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
  * @param {function} callback
  */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function (action) {
  let type = action.actionType;
  switch (type) {
    case "LIST_FETCHED":
      loadData(action.data);
      ArticleStore.emitChange();
      break;
    case "ARTICLE_FETCHED":
      loadArticle(action.data);
      ArticleStore.emitChange();
      break;
  }
});

module.exports = ArticleStore;
