import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  CurrencyContextProvider,
  MultipleThemesContextProvider,
} from './contexts';
import { RootNavigator } from './navigators';
import { store, persistor } from './utils/store';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Provider store={store}>
          <MultipleThemesContextProvider>
            <PersistGate loading={null} persistor={persistor}>
              <CurrencyContextProvider>
                <RootNavigator />
              </CurrencyContextProvider>
            </PersistGate>
          </MultipleThemesContextProvider>
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
