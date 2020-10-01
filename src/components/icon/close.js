import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  size = 100,
  style = {},
  color = '#000',
  className = '',
}) => <svg style={style} className={className} width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <path fill={color} d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/>
</svg>;

Icon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
  color: PropTypes.string,
  className: PropTypes.string
};

export default Icon;
