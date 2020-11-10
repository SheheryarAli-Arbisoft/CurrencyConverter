import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { CurrencyContext } from '../contexts';
import { Container } from '../components/Container';
import { List } from '../components/List';
import { currenciesList } from '../utils/currency';

export const CurrencyList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useContext(ThemeContext);
  const { setBaseCurrency, setQuoteCurrency } = useContext(CurrencyContext);

  const currency = route.params.currency;
  const isBaseCurrency = route.params.isBaseCurrency;

  const data = currenciesList.map((currentCurrency, index) => {
    const item = {
      id: index,
      text: currentCurrency,
      onPress: () => {
        if (isBaseCurrency) {
          setBaseCurrency(currentCurrency);
        } else {
          setQuoteCurrency(currentCurrency);
        }

        navigation.goBack();
      },
    };

    if (currentCurrency === currency) {
      item.icon = 'check';
      item.iconColor = theme.color.blue;
    }

    return item;
  });

  return (
    <Container>
      <StatusBar barStyle='dark-content' backgroundColor={theme.color.white} />
      <List data={data} />
    </Container>
  );
};
