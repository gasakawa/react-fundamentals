import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';

function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={{
        color: theme === 'dark' ? '#fff' : '#000',
        backgroundColor: theme === 'dark' ? '#000' : '#fff',
      }}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
