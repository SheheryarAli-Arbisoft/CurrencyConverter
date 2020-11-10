import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainNavigator } from './MainNavigator';
import { CurrencyList } from '../screens';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Main' mode='modal'>
      <Stack.Screen
        name='Main'
        component={MainNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='CurrencyList' component={CurrencyList} />
    </Stack.Navigator>
  );
};
