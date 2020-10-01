import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './views/home';
import AppBar from './views/appBar';
import TabBar from './views/tabBar';
import Showcase from './views/showcase';
import ROUTES from './constants/routes';

const Routes = () => (
  <Router basename={ROUTES.BASE}>
    <div>
      <AppBar />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.COMPLETED} component={Home} />
      <Route exact path={ROUTES.REMAINING} component={Home} />
      <Route path={ROUTES.SHOWCASE} component={Showcase} />
      <TabBar />
    </div>
  </Router>
);

export default Routes;
