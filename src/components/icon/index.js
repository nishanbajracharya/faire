import React from 'react';

import ICONS from '../../constants/icons';
import COLORS from '../../constants/colors';

import Logo from './logo';

const Icon = ({
  name = '',
  ...props
}) => {
  switch(name) {
    case ICONS.LOGO:
      return <Logo color={COLORS.PRIMARY} {...props} />;
    default:
      return <div />;
  }
}

export default Icon;
