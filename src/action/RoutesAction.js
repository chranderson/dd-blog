import AppAction from './AppAction';

module.exports = {
  /*
  * @param {array} routeArray
  */
  findActiveRoute: function (routeArray) {
    let length = routeArray.length;
    return routeArray[length-1].name;
  },

  /*
  * @param {string, array} routeName, params
  */
  triggerRouteChange: function (routeName, params) {
    switch (routeName) {
      case "article":
        AppAction.fetchArticle(params.id);
        break;
      default:
        AppAction.fetchArticleList();
        break;
    }
  }
};
