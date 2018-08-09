import React from 'react';

import ICONS from '../../constants/icons';
import COLORS from '../../constants/colors';

import Logo from './logo';
import Plus from './plus';
import Ticks from './ticks';
import Search from './search';
import Checked from './checked';
import Unchecked from './unchecked';
import OpenInNew from './openInNew';

const Icon = ({
  name = '',
  ...props
}) => {
  switch(name) {
    case ICONS.LOGO:
      return <Logo color={COLORS.PRIMARY} {...props} />;
      case ICONS.PLUS:
      return <Plus {...props} />;
    case ICONS.SEARCH:
      return <Search {...props} />;
      case ICONS.TICKS:
      return <Ticks {...props} />;
      case ICONS.CHECKED:
      return <Checked {...props} />;
      case ICONS.UNCHECKED:
      return <Unchecked {...props} />;
    case ICONS.OPEN_IN_NEW:
      return <OpenInNew {...props} />;
    default:
      return <div />;
  }
}

export default Icon;
