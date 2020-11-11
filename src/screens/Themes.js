import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useThemeContext, useMultipleThemesContext } from '../hooks';
import { Container } from '../components/Container';
import { StatusBar } from '../components/StatusBar';
import { ListItem, ListItemSeparator } from '../components/List';

export const Themes = () => {
  const navigation = useNavigation();
  const theme = useThemeContext();
  const { updateThemeColor } = useMultipleThemesContext();

  const handleThemeColorChange = value => {
    updateThemeColor(value);
    navigation.popToTop();
  };

  return (
    <Container>
      <StatusBar />
      <ListItem
        text='Blue'
        icon='circle'
        iconColor={theme.color.blue}
        onPress={() => handleThemeColorChange('blue')}
      />
      <ListItemSeparator />

      <ListItem
        text='Orange'
        icon='circle'
        iconColor={theme.color.orange}
        onPress={() => handleThemeColorChange('orange')}
      />
      <ListItemSeparator />

      <ListItem
        text='Green'
        icon='circle'
        iconColor={theme.color.green}
        onPress={() => handleThemeColorChange('green')}
      />
      <ListItemSeparator />

      <ListItem
        text='Purple'
        icon='circle'
        iconColor={theme.color.purple}
        onPress={() => handleThemeColorChange('purple')}
      />
    </Container>
  );
};
