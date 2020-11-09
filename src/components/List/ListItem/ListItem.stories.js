import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ListItem } from './ListItem';
import { ListItemSeparator } from '../ListItemSeparator';
import { Container } from '../../Container';
import { storyDecorator } from '../../../utils/storybook';

storiesOf('Components/List', module)
  .addDecorator(storyDecorator)
  .add('ListItem', () => (
    <Container centered>
      <ListItem
        text={text('text', 'Hello world')}
        onPress={action('onPress')}
      />
      <ListItemSeparator />
    </Container>
  ));
