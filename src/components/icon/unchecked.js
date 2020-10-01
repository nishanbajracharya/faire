import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ size = 100, style = {}, color = '#000', className = '' }) => (
  <svg
    style={style}
    className={className}
    width={size}
    height={size}
    viewBox="0 0 416 416"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M208 28c48.1 0 93.3 18.7 127.3 52.7S388 159.9 388 208c0 48.1-18.7 93.3-52.7 127.3S256.1 388 208 388c-48.1 0-93.3-18.7-127.3-52.7S28 256.1 28 208c0-48.1 18.7-93.3 52.7-127.3S159.9 28 208 28zm0-28C93.1 0 0 93.1 0 208s93.1 208 208 208 208-93.1 208-208S322.9 0 208 0z"
      fill={color}
    />
  </svg>
);

Icon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
