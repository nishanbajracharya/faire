import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../components/icon';
import COLORS from '../constants/colors';
import ROUTES from '../constants/routes';
import IconButton from '../components/iconButton';

const TabBar = () =>
  <div className="tab-bar nav-container">
    <NavLink className="link" to={ROUTES.HOME} exact={true}>All</NavLink>
    <NavLink className="link" to={ROUTES.SHOWCASE}>Completed</NavLink>
    <NavLink className="link" to={ROUTES.SHOWCASE}>Remaining</NavLink>
  </div>

export default TabBar;
