import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../context/ThemeContext';
import { ButtonContainer } from './styles';

function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext);

  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
