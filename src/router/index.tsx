import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './routes'

function RouteWithSubRoutes(route:any) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
function RouteConfig() {
  return (
    <Router>
      <div>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}

export default RouteConfig;