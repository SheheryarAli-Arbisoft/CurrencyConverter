import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { List } from '../List';
import { Container } from '../../Container';
import { storyDecorator } from '../../../utils/storybook';

const data = [
  {
    id: 1,
    text: 'List item',
    icon: 'check',
    onPress: action('onPress'),
  },
  {
    id: 2,
    text: 'List item',
    icon: 'file',
    onPress: action('onPress'),
  },
  {
    id: 3,
    text: 'List item',
    icon: 'cog',
    iconColor: '#c77e24',
    onPress: action('onPress'),
  },
  {
    id: 4,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 5,
    text: 'List item',
    onPress: action('onPress'),
  },

  {
    id: 6,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 7,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 8,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 9,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 10,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 11,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 12,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 13,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 14,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 15,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 16,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 17,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 18,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 19,
    text: 'List item',
    onPress: action('onPress'),
  },
  {
    id: 20,
    text: 'List item',
    onPress: action('onPress'),
  },
];

storiesOf('Components/List', module)
  .addDecorator(storyDecorator)
  .add('List', () => (
    <Container centered>
      <List data={data} />
    </Container>
  ));
