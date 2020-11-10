import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container } from '../components/Container';
import { List } from '../components/List';

export const CurrencyList = () => {
  const theme = useContext(ThemeContext);

  let data = [
    'AUD',
    'BGN',
    'BRL',
    'CAD',
    'CHF',
    'CNY',
    'CZK',
    'DKK',
    'EUR',
    'GBP',
    'HKD',
    'HRK',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'JPY',
    'KRW',
    'MXN',
    'MYR',
    'NOK',
    'NZD',
    'PHP',
    'PLN',
    'RON',
    'RUB',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'USD',
    'ZAR',
  ];

  data = data.map((item, index) => ({
    id: index,
    text: item,
    icon: 'check',
    iconColor: theme.color.blue,
  }));

  return (
    <Container>
      <List data={data} />
    </Container>
  );
};
