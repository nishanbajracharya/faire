import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '@/components/icon';
import COLORS from '@/constants/colors';
import ROUTES from '@/constants/routes';

const TabBar = () =>
  <div className="tab-bar nav-container">
    <NavLink className="link" to={ROUTES.HOME} exact={true}>
      <Icon name="ticks" color={COLORS.GRAY}/>All
    </NavLink>
    <NavLink className="link" to={ROUTES.COMPLETED}>
      <Icon name="checked" color={COLORS.GRAY}/>Completed
    </NavLink>
    <NavLink className="link" to={ROUTES.REMAINING}>
      <Icon name="unchecked" color={COLORS.GRAY}/>Remaining
    </NavLink>
  </div>

export default TabBar;
