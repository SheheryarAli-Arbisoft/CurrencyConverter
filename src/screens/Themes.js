import React from 'react';
import { useThemeContext } from '../hooks';
import { Container } from '../components/Container';
import { StatusBar } from '../components/StatusBar';
import { ListItem, ListItemSeparator } from '../components/List';

export const Themes = () => {
  const { theme } = useThemeContext();

  return (
    <Container>
      <StatusBar />
      <ListItem text='Blue' icon='circle' iconColor={theme.color.blue} />
      <ListItemSeparator />

      <ListItem text='Orange' icon='circle' iconColor={theme.color.orange} />
      <ListItemSeparator />

      <ListItem text='Green' icon='circle' iconColor={theme.color.green} />
      <ListItemSeparator />

      <ListItem text='Purple' icon='circle' iconColor={theme.color.purple} />
    </Container>
  );
};
