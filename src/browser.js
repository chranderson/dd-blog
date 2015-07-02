import React from "react";
import Router from 'react-router';
import routes from './routes.jsx';
import RoutesAction from './action/RoutesAction';

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler/>, document.body);
  let activeRoute = RoutesAction.findActiveRoute(state.routes);

  // Every time there's a route change
  // ask RoutesAction to manage the flow
  RoutesAction.triggerRouteChange(activeRoute, state.params);
});
