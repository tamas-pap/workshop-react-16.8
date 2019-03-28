import React from 'react';
import PropTypes from 'prop-types';

const renderIcon = icon => {
  switch (icon) {
    case 'next':
      return (
        <path
          d="M11 30.828L8.172 28l12-12-12-12L11 1.172l13.414 13.414a1.998 1.998 0 0 1 0 2.828L11 30.828z"
          fill="currentColor"
          fillRule="evenodd"
        />
      );

    case 'previous':
      return (
        <path
          d="M21 30.828L23.828 28l-12-12 12-12L21 1.172 7.586 14.586a1.998 1.998 0 0 0 0 2.828L21 30.828z"
          fill="currentColor"
          fillRule="evenodd"
        />
      );

    default:
      return false;
  }
};

const Icon = ({ className, icon }) => (
  <svg viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" className={className}>
    {renderIcon(icon)}
  </svg>
);

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: undefined,
};

export default Icon;
