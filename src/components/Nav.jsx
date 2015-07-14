import React from 'react';
import Router from 'react-router';
import Article from './Article.jsx';
import ArticleStore from '../stores/ArticleStore';

let Route = Router.Route, DefaultRoute = Router.DefaultRoute,
RouteHandler = Router.RouteHandler, Link = Router.Link;

let Navigation = React.createClass({
	getInitialState: function () {
		return {
			article: ArticleStore.findById('first_article')
		};
	},

	render: function() {
		let article = this.state.article;
		return (
			<nav>
				<button>
					<Link to="article" params={{id: article.id}} handler={Article}>Sign Up</Link>
				</button>

				<button>
					<Link to="app">Login</Link>
				</button>
			</nav>
			);
	}
});

export default Navigation;