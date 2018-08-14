import React from 'react';

import ICONS from '../../constants/icons';
import COLORS from '../../constants/colors';

import List from './list';
import Logo from './logo';
import Plus from './plus';
import Ticks from './ticks';
import Close from './close';
import Search from './search';
import Checked from './checked';
import Unchecked from './unchecked';
import OpenInNew from './openInNew';

const Icon = ({
  name = '',
  ...props
}) => {
  switch (name) {
    case ICONS.LOGO:
      return <Logo color={COLORS.PRIMARY} {...props} />;
    case ICONS.LIST:
      return <List size={25} {...props} />;
    case ICONS.PLUS:
      return <Plus size={25} {...props} />;
    case ICONS.CLOSE:
      return <Close size={25} {...props} />;
    case ICONS.SEARCH:
      return <Search size={25} {...props} />;
    case ICONS.TICKS:
      return <Ticks size={25} {...props} />;
    case ICONS.CHECKED:
      return <Checked size={25} {...props} />;
    case ICONS.UNCHECKED:
      return <Unchecked size={25} {...props} />;
    case ICONS.OPEN_IN_NEW:
      return <OpenInNew size={25} {...props} />;
    default:
      return <div />;
  }
}

export default Icon;
