import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { useCurrencyContext } from '../hooks';
import { Container } from '../components/Container';
import { StatusBar } from '../components/StatusBar';
import { Settings } from '../components/Settings';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
import { Field } from '../components/Field';
import { Button } from '../components/Button';
import reverse from '../assets/images/reverse.png';

export const Home = () => {
  const navigation = useNavigation();
  const {
    baseCurrency,
    setBaseCurrency,
    quoteCurrency,
    setQuoteCurrency,
    conversionRate,
  } = useCurrencyContext();
  const [baseAmount, setBaseAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const reverseCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  useEffect(() => {
    if (baseAmount === '') {
      setConvertedAmount('');
    } else {
      const amount = parseFloat(baseAmount) * conversionRate;
      setConvertedAmount(amount.toFixed(2));
    }
  }, [baseAmount, conversionRate]);

  return (
    <Container centered themeBackground>
      <StatusBar themeBackground />
      <Settings />
      <Logo />
      <Text variant='large' colorWhite bold marginBottom>
        Currency Converter
      </Text>
      <Field
        currency={baseCurrency}
        amount={baseAmount}
        onChangeText={text => setBaseAmount(text)}
        onPress={() =>
          navigation.navigate('CurrencyList', {
            title: 'Base Currency',
            currency: baseCurrency,
            isBaseCurrency: true,
          })
        }
      />
      <Field
        currency={quoteCurrency}
        amount={convertedAmount}
        onPress={() =>
          navigation.navigate('CurrencyList', {
            title: 'Quote Currency',
            currency: quoteCurrency,
            isBaseCurrency: false,
          })
        }
        disabled
      />
      <Text variant='small' colorWhite marginBottom>
        {`1 ${baseCurrency} = ${conversionRate.toFixed(
          2
        )} ${quoteCurrency} as of ${moment(Date.now()).format(
          'MMMM Do, YYYY'
        )}`}
      </Text>
      <Button
        value='Reverse currencies'
        icon={reverse}
        onPress={reverseCurrencies}
        themeBackground
      />
    </Container>
  );
};
