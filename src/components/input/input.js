import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  className = '',
  ...props
}) => <input className={`uk-input ${className}`} {...props}/>;

Input.propTypes = {
  className: PropTypes.string
}

export default Input;
