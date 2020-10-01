import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ size = 100, style = {}, color = '#000', className = '' }) => (
  <svg
    style={style}
    className={className}
    width={size}
    height={size}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <circle cx="92" cy="256" r="28" fill={color} />
    <circle cx="92" cy="132" r="28" fill={color} />
    <circle cx="92" cy="380" r="28" fill={color} />
    <path
      fill={color}
      d="M432 240H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 124H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zM191.5 148H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16z"
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
