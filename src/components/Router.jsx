import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import * as Pages from './pages';


class Router extends React.Component {
  render() {
    // let theme = Theme.self
    let routes = [];
    // eslint-disable-next-line
    for (let page in Pages) {
      let PageComponent = Pages[page];
      routes.push(
        <Route
          key={page}
          path={`/${page}`}
          component={PageComponent}
        />
      )
    }
    return (
        <HashRouter>
          <Switch>
            <Route
              exact
              key={'/'}
              path={'/'}
              component={Pages.Home} />
            {routes}
          </Switch>
        </HashRouter>
    )
  }
}

export default Router;
