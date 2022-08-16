import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import { ThemeContext } from '../../context/ThemeContext';

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Title>{props.title}</Title>
      <h2>{props.subtitle}</h2>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
    </>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onToggleTheme: PropTypes.func,
};
