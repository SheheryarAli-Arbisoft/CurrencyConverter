import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainNavigator } from './MainNavigator';
import { CurrencyList } from '../screens';

const Stack = createStackNavigator();

const getHeaderRight = navigation => () => (
  <TouchableOpacity
    style={{ paddingRight: 20 }}
    onPress={() => navigation.goBack()}
  >
    <Icon name='close' size={28} />
  </TouchableOpacity>
);

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Main' mode='modal'>
      <Stack.Screen
        name='Main'
        component={MainNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CurrencyList'
        component={CurrencyList}
        options={({ navigation, route }) => ({
          title: route.params.title,
          headerLeft: null,
          headerRight: getHeaderRight(navigation),
        })}
      />
    </Stack.Navigator>
  );
};
