import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './views/home';
import Showcase from './views/showcase';

const Routes = () => <Router>
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/showcase" component={Showcase} />
  </div>
</Router>;

export default Routes;
