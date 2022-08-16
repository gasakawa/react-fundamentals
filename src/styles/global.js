import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {

    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    
    font-family: sans-serif;

  }
`;
