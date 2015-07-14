import React from 'react';
import ArticleList from './ArticleList.jsx';

let Home = React.createClass({
  render: function () {
    return (
      <div className="home-container">
          <p> This is home! </p>
          <ArticleList />
      </div>
    );
  }
});

module.exports = Home;