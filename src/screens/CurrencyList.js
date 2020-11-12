import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useThemeContext, useCurrencyContext } from '../hooks';
import { Container } from '../components/Container';
import { StatusBar } from '../components/StatusBar';
import { List } from '../components/List';

export const CurrencyList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useThemeContext();
  const {
    setBaseCurrency,
    setQuoteCurrency,
    currenciesList,
  } = useCurrencyContext();

  const { currency, isBaseCurrency } = route.params;

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
      item.icon = 'check-circle';
      item.iconColor = theme.color.primary;
    }

    return item;
  });

  return (
    <Container>
      <StatusBar />
      <List data={data} />
    </Container>
  );
};
