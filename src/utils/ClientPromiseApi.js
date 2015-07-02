let ES6Promise = require('es6-promise').Promise;

let getJSON = function(url) {
  let promise = new ES6Promise(function(resolve, reject){
    let client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) { resolve(this.response); }
        else { reject(this); }
        }
      };
    });

  return promise;
};

module.exports = {
  fetchArticleById: function (id) {
    return getJSON('/api/article/'+id);
  },
  fetchArticles: function () {
    return getJSON('/api/articles');
  }
};
