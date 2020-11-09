import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, boolean } from '@storybook/addon-knobs';
import { Container } from './Container';
import { Text } from '../Text';
import { storyDecorator } from '../../utils/storybook';

storiesOf('Components', module)
  .addDecorator(storyDecorator)

  .add('Container', () => (
    <Container
      centered={boolean('centered', false)}
      themeBackground={boolean('themeBackground', false)}
    >
      <Text>Hello world</Text>
    </Container>
  ));
