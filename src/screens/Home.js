import React from 'react';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
import { Field } from '../components/Field';
import { Button } from '../components/Button';
import reverse from '../assets/images/reverse.png';

export const Home = () => {
  return (
    <Container centered themeBackground>
      <Logo />
      <Text variant='large' colorWhite bold marginBottom>
        Currency Converter
      </Text>
      <Field currency='USD' amount='100' />
      <Field currency='GBP' amount='0.8345' disabled />
      <Text variant='small' colorWhite marginBottom>
        1 USD = 0.8346 GBP as of{' '}
      </Text>
      <Button value='Reverse currencies' icon={reverse} themeBackground />
    </Container>
  );
};
