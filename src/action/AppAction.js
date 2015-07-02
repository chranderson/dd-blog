import AppDispatcher from '../dispatcher/Dispatcher';
import PromiseApi from '../utils/ClientPromiseApi';

module.exports = {
  fetchArticle: function (id) {
    let promise = PromiseApi.fetchArticleById(id)
      .then(function (data) {
        AppDispatcher.dispatch({
          actionType: "ARTICLE_FETCHED",
          data: data
        });
      });
  },

  fetchArticleList: function () {
    let promise = PromiseApi.fetchArticles()
      .then(function (data) {
        AppDispatcher.dispatch({
          actionType: "LIST_FETCHED",
          data: data
        });
      });
  }
};
