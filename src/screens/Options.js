import React from 'react';
import { Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../components/Container';
import { StatusBar } from '../components/StatusBar';
import { ListItem, ListItemSeparator } from '../components/List';

export const Options = () => {
  const navigation = useNavigation();

  const URL = 'https://fixer.io';

  const openUrl = () => {
    Linking.openURL(URL).catch(() =>
      Alert.alert('Error occurred', 'Please try again later')
    );
  };

  return (
    <Container>
      <StatusBar />
      <ListItem
        text='Themes'
        icon='chevron-right'
        onPress={() => navigation.navigate('Themes')}
      />
      <ListItemSeparator />

      <ListItem
        text='Fixer.io'
        icon='google-circles-extended'
        onPress={openUrl}
      />
      <ListItemSeparator />

      <ListItem text='Logout' icon='logout' />
    </Container>
  );
};
