import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {setRef, ...props} = this.props;
    return <input {...props} className={`uk-input input-box ${props.className}`} ref={c => setRef(c)}/>;
  }
}

Input.propTypes = {
  className: PropTypes.string
}

Input.defaultProps = {
  className: '',
  setRef: f => f,
}

export default Input;
