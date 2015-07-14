function getInjectedData(key) {
  let inj = window.__INJECTED[key];
  return inj;

};

let _data = getInjectedData("list") || [];
/*
* Client side API post, get article(s)
*/
module.exports = {
  getArticles:() {
    return _data;
  },

  getArticle:(id) {
    let article;
    _data.forEach((d) => if (d.id == id) {
        article = d;
    });

    return article || {id: "", content: ""};
  },

  setArticle:(article, index) {

    _data[index] = article;
    return true;
  }
};
