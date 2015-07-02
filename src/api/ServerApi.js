let fs = require('fs');
let basedir = process.env.PWD

let FILES_DIR = basedir + '/articles';

module.exports = {
  getArticles: function () {
    let articles = fs.readdirSync(FILES_DIR),
      list = [];

    articles.forEach( function (a) {
      list.push({
        id: a.replace(".md", ""),
        content: ""
      });
    });
    return list;
  },

  getArticle: function (id) {
    let article = fs.readFileSync(FILES_DIR + '/' + id + ".md", {encoding: 'utf8'});

    return {
      id: id,
      content: article
    };
  }
};
