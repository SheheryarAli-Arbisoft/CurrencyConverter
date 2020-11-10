import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container } from '../components/Container';
import { ListItem, ListItemSeparator } from '../components/List';

export const Themes = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
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
