import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  size = 100,
  style = {},
  color = '#000',
  className = '',
}) => <svg style={style} className={className} width={size} height={size} viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <path fill={color} d="M273.509 241.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C283.358 63.632 219.896 0 141.135 0 63.452 0 0 63.632 0 142.629c0 78.997 63.452 142.628 142.225 142.628 35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L351.18 384 384 351.086 273.509 241.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z" />
</svg>;

Icon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
  color: PropTypes.string,
  className: PropTypes.string
};

export default Icon;
