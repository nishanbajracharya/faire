import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  size = 100,
  style = {},
  color = '#000',
  className = '',
}) => <svg style={style} className={className} width={size} height={size} viewBox="0 0 416 416" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <path d="M208 0C93.1 0 0 93.1 0 208s93.1 208 208 208 208-93.1 208-208S322.9 0 208 0zm90.5 224H224v74.5c0 8.8-7.2 16-16 16-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3V224h-74.5c-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3 0-8.8 7.2-16 16-16H192v-74.5c0-8.8 7.2-16 16-16s16 7.2 16 16V192h74.5c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill={color} />
</svg>;

Icon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
  color: PropTypes.string,
  className: PropTypes.string
};

export default Icon;
