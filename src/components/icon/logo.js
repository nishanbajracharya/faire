import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ size = 100, style = {}, color = '#000', className = '' }) => (
  <svg
    style={style}
    className={className}
    width={size}
    height={(size * 24) / 77}
    viewBox="0 0 77 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <text
      fontFamily="Montserrat-SemiBold, Montserrat"
      fontSize="24"
      fontWeight="500"
      fill={color}
      transform="translate(-2 -4)"
    >
      <tspan x="0" y="23">
        Faire
      </tspan>
    </text>
    <path
      transform="translate(47)"
      fill={color}
      fillRule="nonzero"
      d="M20.794 10.776a.437.437 0 0 0 0-.608l-1.85-1.962a.403.403 0 0 0-.3-.131.403.403 0 0 0-.298.13l-6.215 6.459 2.467 2.532 6.196-6.42zm-18.102 4l7.15 7.345-1.253 1.29-.01.01c-.186.177-.663.598-1.224.598-.392 0-.86-.225-1.234-.617L.215 17.327a.44.44 0 0 1 0-.617l1.878-1.934a.419.419 0 0 1 .3-.131c.112 0 .214.047.299.13zm27.187-6.608a.435.435 0 0 1 0 .598l-14.113 14.59-.009.008c-.187.178-.664.599-1.224.599-.393 0-.86-.225-1.234-.617L7.393 17.27a.44.44 0 0 1 0-.617L9.27 14.72a.419.419 0 0 1 .3-.131c.111 0 .214.047.298.13l4.682 4.823L27.43 6.206a.403.403 0 0 1 .299-.131c.112 0 .224.046.299.13l1.85 1.963z"
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
