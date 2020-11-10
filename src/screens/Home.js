import React from 'react';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
import { Field } from '../components/Field';

export const Home = () => {
  return (
    <Container centered themeBackground>
      <Logo />
      <Text variant='large' colorWhite bold marginBottom>
        Currency Converter
      </Text>
      <Field currency='USD' amount='100' />
      <Field currency='USD' amount='100' disabled />
    </Container>
  );
};
