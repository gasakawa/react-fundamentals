import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import { ThemeContext } from './ThemeContext';

import styles from '../styles/header.css';

function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
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
