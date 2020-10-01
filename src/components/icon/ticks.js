import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  size = 100,
  style = {},
  color = '#000',
  className = '',
}) => <svg style={style} className={className} width={size} height={size} viewBox="0 0 321 321" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <path fill={color} d="M222.5 115.3c1.7-1.8 1.8-4.7 0-6.5l-19.8-21c-.8-.9-2-1.4-3.2-1.4-1.2 0-2.4.5-3.2 1.4l-66.5 69.1 26.4 27.1 66.3-68.7zM28.8 158.1l76.5 78.6-13.4 13.8-.1.1c-2 1.9-7.1 6.4-13.1 6.4-4.2 0-9.2-2.4-13.2-6.6l-63.2-65c-1.8-1.8-1.8-4.8 0-6.6l20.1-20.7c.9-.9 2-1.4 3.2-1.4 1.2 0 2.3.5 3.2 1.4zm290.9-70.7c1.7 1.8 1.7 4.7 0 6.4l-151 156.1-.1.1c-2 1.9-7.1 6.4-13.1 6.4-4.2 0-9.2-2.4-13.2-6.6l-63.2-65c-1.8-1.8-1.8-4.8 0-6.6l20.1-20.7c.9-.9 2-1.4 3.2-1.4 1.2 0 2.3.5 3.2 1.4l50.1 51.6L293.5 66.4c.8-.9 2-1.4 3.2-1.4 1.2 0 2.4.5 3.2 1.4l19.8 21z" />
</svg>;

Icon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
  color: PropTypes.string,
  className: PropTypes.string
};

export default Icon;
