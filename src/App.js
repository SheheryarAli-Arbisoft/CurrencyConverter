import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { CurrencyContextProvider } from './contexts';
import { RootNavigator } from './navigators';
import { theme } from './theme';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <CurrencyContextProvider>
            <RootNavigator />
          </CurrencyContextProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
