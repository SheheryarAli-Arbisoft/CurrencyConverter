import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Field } from './Field';
import { Container } from '../Container';
import { storyDecorator } from '../../utils/storybook';

storiesOf('Components', module)
  .addDecorator(storyDecorator)
  .add('Field', () => (
    <Container centered themeBackground>
      <Field
        currency={text('currency', 'USD')}
        amount={text('amount', '100')}
        onPress={action('onPress')}
        onChangeText={action('onChangeText')}
        disabled={boolean('disabled', false)}
      />
    </Container>
  ));
