import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Text } from './Text';
import { storyDecorator } from '../../utils/storybook';

storiesOf('Components', module)
  .addDecorator(storyDecorator)

  .add('Text', () => (
    <Text
      variant={select(
        'variant',
        {
          Large: 'large',
          Normal: 'normal',
          Small: 'small',
        },
        'normal'
      )}
      bold={boolean('bold', false)}
      colorWhite={boolean('colorWhite', false)}
    >
      {text('children', 'Hello world')}
    </Text>
  ));
