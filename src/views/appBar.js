import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../components/icon';
import COLORS from '../constants/colors';
import ROUTES from '../constants/routes';
import IconButton from '../components/iconButton';

const AppBar = () => <div className="appbar">
  <div className="container">
    <NavLink to="/" exact={true}><Icon name="logo" size={80} /></NavLink>
    <div className="nav-container">
      <NavLink className="link" to={ROUTES.HOME} exact={true}>Home</NavLink>
      <NavLink className="link" to={ROUTES.COMPLETED}>Completed</NavLink>
      <NavLink className="link" to={ROUTES.REMAINING}>Remaining</NavLink>
    </div>
    <IconButton name="plus" color={COLORS.PRIMARY} />
  </div>
</div>;

export default AppBar;
