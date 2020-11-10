import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { Home, CurrencyList, Options, Themes } from './screens';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider></SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
