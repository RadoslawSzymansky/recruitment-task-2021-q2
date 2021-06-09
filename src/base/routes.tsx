import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Portal } from '@layouts';
import { Landing } from '@views';
import { appUrls } from '@base/paths';

export const ROUTES = [
  {
    path: appUrls.portal.landing,
    component: <Landing />,
    isExact: false,
  },
];

const Routes: FC = () => (
  <BrowserRouter basename='/'>
    <Portal>
      <Switch>
        {ROUTES.map(({ path, component, isExact }) => (
          <Route key={path} exact={isExact} path={path}>
            {component}
          </Route>
        ))}
        <Route path='*'>
          <div>404</div>
        </Route>
      </Switch>
    </Portal>
  </BrowserRouter>
);

export default Routes;
