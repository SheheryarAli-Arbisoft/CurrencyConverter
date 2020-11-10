import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Options, Themes } from '../screens';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='Options' component={Options} />
      <Stack.Screen name='Themes' component={Themes} />
    </Stack.Navigator>
  );
};
