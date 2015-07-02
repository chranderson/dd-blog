function getInjectedData(key) {
  let inj = window.__INJECTED[key];
  return inj;

};

let _data = getInjectedData("list") || [];

module.exports = {
  getArticles: function () {
    return _data;
  },

  getArticle: function (id) {
    let article;
    _data.forEach(function (d) {
      if (d.id == id) {
        article = d;
      }
    });

    return article || {id: "", content: ""};
  },

  setArticle: function (article, index) {

    _data[index] = article;
    return true;
  }
};
