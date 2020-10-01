import React from 'react';

import Icon from '../icon';

const IconButton = ({
  name,
  size = 25,
  color = '',
  iconStyle,
  buttonStyle,
  onClick = (f) => f,
  iconClassName = '',
  buttonClassName = '',
}) => (
  <button
    className={`uk-button icon-button ${buttonClassName}`}
    style={buttonStyle}
    onClick={onClick}
  >
    <Icon
      style={iconStyle}
      className={iconClassName}
      name={name}
      color={color}
      size={size}
    />
  </button>
);

export default IconButton;
