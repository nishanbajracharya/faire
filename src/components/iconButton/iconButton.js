import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';

const IconButton = ({
  name,
  size = 25,
  color = '',
  iconStyle,
  buttonStyle,
  onClick = f => f,
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

IconButton.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func,
  iconStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  iconClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default IconButton;
