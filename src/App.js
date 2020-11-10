import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { Home, CurrencyList, Options, Themes } from './screens';
import { theme } from './theme';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider></SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
