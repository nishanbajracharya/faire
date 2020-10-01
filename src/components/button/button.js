import React from 'react';

const Button = ({
  label,
  style,
  children,
  className = '',
  primary = false,
  onClick = (f) => f,
  disabled = false,
  secondary = false,
}) => (
  <button
    style={style}
    onClick={onClick}
    disabled={disabled}
    className={`uk-button uk-button-default ${
      primary ? 'uk-button-primary' : ''
    } ${secondary ? 'uk-button-secondary' : ''} ${className}`}
  >
    {label || children}
  </button>
);

export default Button;
