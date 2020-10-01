import React from 'react';

import Icon from '@/components/icon';
import ICONS from '@/constants/icons';
import COLORS from '@/constants/colors';

const EmptyList = () => (
  <div className="empty-list">
    <Icon name={ICONS.LIST} size={100} color={COLORS.GRAY} />
    You don't have any tasks yet. Create a new one.
  </div>
);

export default EmptyList;
