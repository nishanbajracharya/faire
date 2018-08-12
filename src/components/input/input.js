import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    return <input {...this.props} className={`uk-input input-box ${this.props.className}`} ref={c => this.props.setRef(c)}/>;
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
