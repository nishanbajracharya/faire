import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  size = 100,
  style = {},
  color = '#000',
  className = '',
}) => <svg style={style} className={className} width={size} height={size} viewBox="0 0 416 416" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M208 0C93.1 0 0 93.1 0 208s93.1 208 208 208 208-93.1 208-208S322.9 0 208 0zm106.5 150.5L180.8 284.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z" fill={color} />
  </svg>;

Icon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
  color: PropTypes.string,
  className: PropTypes.string
}

export default Icon;
