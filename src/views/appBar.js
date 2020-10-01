import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import Icon from '@/components/icon';
import ICONS from '@/constants/icons';
import COLORS from '@/constants/colors';
import ROUTES from '@/constants/routes';
import * as modalActions from '@/actions/modal';
import IconButton from '@/components/iconButton';

const AppBar = ({ openModal = f => f }) => (
  <div className="appbar">
    <div className="container">
      <NavLink to="/" exact={true}>
        <Icon name="logo" size={80} />
      </NavLink>
      <div className="nav-container">
        <NavLink className="link" to={ROUTES.HOME} exact={true}>
          Home
        </NavLink>
        <NavLink className="link" to={ROUTES.COMPLETED}>
          Completed
        </NavLink>
        <NavLink className="link" to={ROUTES.REMAINING}>
          Remaining
        </NavLink>
      </div>
      <IconButton
        name={ICONS.PLUS}
        buttonClassName="header-add"
        color={COLORS.PRIMARY}
        onClick={() => openModal(true)}
      />
      <IconButton
        name={ICONS.SEARCH}
        buttonClassName="header-search"
        color={COLORS.PRIMARY}
      />
    </div>
  </div>
);

export default compose(
  withRouter,
  connect(null, dispatch => ({
    openModal: open => dispatch(modalActions.openModal(open)),
  }))
)(AppBar);
