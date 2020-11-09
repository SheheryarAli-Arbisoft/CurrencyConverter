import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { Container } from '../Container';
import { storyDecorator } from '../../utils/storybook';

storiesOf('Components', module)
  .addDecorator(storyDecorator)

  .add('Button', () => (
    <Container centered themeBackground>
      <Button
        value={text('value', 'Click me')}
        onPress={action('onPress')}
        variant={select(
          'variant',
          {
            Normal: 'normal',
            Small: 'small',
          },
          'normal'
        )}
        themeBackground={boolean('themeBackground', false)}
      />
    </Container>
  ));
