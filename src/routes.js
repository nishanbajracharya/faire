import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './views/home';
import AppBar from './views/appBar';
import Showcase from './views/showcase';
import ROUTES from './constants/routes';

const Routes = () => <Router>
  <div>
    <AppBar />
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route path={ROUTES.SHOWCASE} component={Showcase} />
  </div>
</Router>;

export default Routes;
