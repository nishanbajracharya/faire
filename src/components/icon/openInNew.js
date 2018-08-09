import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  size = 100,
  style = {},
  color = '#000',
  className = '',
}) => <svg style={style} className={className} width={size} height={size} viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M341.34 341.332H42.66V42.668H176V0H42.66C19.191 0 0 19.197 0 42.668v298.664C0 364.803 19.191 384 42.66 384h298.68c23.469 0 42.66-19.197 42.66-42.668V208h-42.66v133.332zM224 0v42.668h87.474L95.999 258.133l29.866 29.866 215.476-215.47V160H384V0H224z" fill={color} />
  </svg>;

Icon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
  color: PropTypes.string,
  className: PropTypes.string
}

export default Icon;
