import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { CurrencyContextProvider } from './contexts';
import { RootNavigator } from './navigators';
import { loadAllData } from './actions/currency';
import { store, persistor } from './utils/store';
import { theme } from './utils/theme';

const App = () => {
  useEffect(() => {
    store.dispatch(loadAllData());
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <CurrencyContextProvider>
                <RootNavigator />
              </CurrencyContextProvider>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
