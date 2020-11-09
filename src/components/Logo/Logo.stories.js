import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean } from '@storybook/addon-knobs';
import { Logo } from './Logo';
import { Container } from '../Container';
import { storyDecorator } from '../../utils/storybook';

storiesOf('Components', module)
  .addDecorator(storyDecorator)

  .add('Logo', () => (
    <Container centered themeBackground>
      <Logo small={boolean('small', false)} />
    </Container>
  ));
