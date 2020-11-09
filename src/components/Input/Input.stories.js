import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Input } from './Input';
import { Container } from '../Container';
import { storyDecorator } from '../../utils/storybook';

storiesOf('Components', module)
  .addDecorator(storyDecorator)

  .add('Input', () => (
    <Container centered>
      <Input
        value={text('value', 'Hello world')}
        onChangeText={action('onChangeText')}
        disabled={boolean('disabled', false)}
      />
    </Container>
  ));
