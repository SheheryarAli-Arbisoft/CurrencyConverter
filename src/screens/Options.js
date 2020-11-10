import React, { useContext } from 'react';
import { Linking, Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { Container } from '../components/Container';
import { ListItem, ListItemSeparator } from '../components/List';

export const Options = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  const URL = 'https://fixer.io';

  const openUrl = () => {
    Linking.openURL(URL).catch(() =>
      Alert.alert('Error occurred', 'Please try again later')
    );
  };

  return (
    <Container>
      <StatusBar barStyle='dark-content' backgroundColor={theme.color.white} />
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
