import React, { createContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { ratesSelector } from '../selectors/currency';

export const CurrencyContext = createContext();

export const CurrencyContextProvider = ({ children }) => {
  const rates = useSelector(ratesSelector);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [quoteCurrency, setQuoteCurrency] = useState('GBP');
  const [conversionRate] = useState(0.8345);

  const getCurrenciesList = () => Object.keys(rates);

  const contextValues = {
    baseCurrency,
    setBaseCurrency,
    quoteCurrency,
    setQuoteCurrency,
    conversionRate,
    currenciesList: getCurrenciesList(),
  };

  return (
    <CurrencyContext.Provider value={contextValues}>
      {children}
    </CurrencyContext.Provider>
  );
};
