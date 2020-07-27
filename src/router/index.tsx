import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import routes from './routes'

const RouteWithSubRoutes = (route: any) => {
  if (!route.component && route.routes) {
    return route.routes.map((k: any, i: any) => {
      return <RouteWithSubRoutes key={i} {...k} />
    })
  } else if (route.component && !route.routes) {
    return <Route path={route.path} component={route.component} />
  } else {
    return <Route path={route.path} />
  }
}
const RouteConfig = () => {
  return (
    <Switch>
      <Redirect from="/" to="/park-archives" exact />
      <Route>
        {routes.map((route: any, i: any) => {
          return <RouteWithSubRoutes key={i} {...route} />
        })}
      </Route>
    </Switch>
  )
}

export default RouteConfig;