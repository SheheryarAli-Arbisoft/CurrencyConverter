import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainNavigator } from './MainNavigator';
import { CurrencyList } from '../screens';
import { loadAllData } from '../actions/currency';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllData());
  }, []);

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
