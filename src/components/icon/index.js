import React from 'react';

import ICONS from '../../constants/icons';

import Logo from './logo';

const Icon = ({
  name = '',
  ...props
}) => {
  switch(name) {
    case ICONS.LOGO:
      return <Logo {...props} />;
    default:
      return <div />;
  }
}

export default Icon;
