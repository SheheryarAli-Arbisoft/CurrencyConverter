import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home, CurrencyList, Options, Themes } from './screens';
import { theme } from './theme';

const App = () => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};

export default App;
