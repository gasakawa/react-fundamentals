import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';

import GlobalStyle from './styles/global';

import themes from './styles/themes';

ReactDom.render(
  <>
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
