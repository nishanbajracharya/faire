import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';
import ICONS from '../../constants/icons';

class Search extends React.Component {
  render() {
    return (
      <div className={`search-container ${this.props.containerClassName}`}>
        <input
          className={`uk-input search-bar ${this.props.className}`}
          placeholder="Search"
          onInput={e => this.props.onInput(e.target.value)}
        />
        <Icon name={ICONS.SEARCH} size={24} className="search-icon" />
      </div>
    );
  }
}

Search.defaultProps = {
  className: '',
  onInput: f => f,
  containerClassName: '',
};

Search.propTypes = {
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default Search;
