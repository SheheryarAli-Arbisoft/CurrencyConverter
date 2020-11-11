import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  CurrencyContextProvider,
  MultipleThemesContextProvider,
} from './contexts';
import { RootNavigator } from './navigators';
import { loadAllData } from './actions/currency';
import { store, persistor } from './utils/store';

const App = () => {
  useEffect(() => {
    store.dispatch(loadAllData());
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MultipleThemesContextProvider>
              <CurrencyContextProvider>
                <RootNavigator />
              </CurrencyContextProvider>
            </MultipleThemesContextProvider>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
