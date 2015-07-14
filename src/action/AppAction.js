import AppDispatcher from '../dispatcher/Dispatcher';
import PromiseApi from '../utils/ClientPromiseApi';
/**
* This exports two methods that return promises for an article or the list of articles using the dispatcher
*/
module.exports = {
  /**
  * @params: {string}  id
  */
  fetchArticle: function (id) {
    let promise = PromiseApi.fetchArticleById(id)
      .then((data) => AppDispatcher.dispatch({
          actionType: "ARTICLE_FETCHED",
          data: data
        })
      );
  },

  fetchArticleList: function () {
    let promise = PromiseApi.fetchArticles()
      .then((data) => AppDispatcher.dispatch({
          actionType: "LIST_FETCHED",
          data: data
        })
      );
  }
};
