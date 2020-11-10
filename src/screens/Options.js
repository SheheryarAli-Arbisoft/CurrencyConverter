import React from 'react';
import { Container } from '../components/Container';
import { ListItem, ListItemSeparator } from '../components/List';

export const Options = () => {
  return (
    <Container>
      <ListItem text='Themes' icon='chevron-right' />
      <ListItemSeparator />

      <ListItem text='Fixer.io' icon='google-circles-extended' />
      <ListItemSeparator />

      <ListItem text='Logout' icon='logout' />
    </Container>
  );
};
