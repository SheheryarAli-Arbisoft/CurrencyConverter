import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { CurrencyContextProvider } from './contexts';
import { RootNavigator } from './navigators';
import { store } from './utils/store';
import { theme } from './utils/theme';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CurrencyContextProvider>
              <RootNavigator />
            </CurrencyContextProvider>
          </ThemeProvider>
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
