import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { useCurrency } from '../hooks';
import { ratesSelector } from '../selectors/currency';

export const CurrencyContext = createContext();

export const CurrencyContextProvider = ({ children }) => {
  const rates = useSelector(ratesSelector);
  const [baseCurrency, setBaseCurrency] = useCurrency('base', 'USD');
  const [quoteCurrency, setQuoteCurrency] = useCurrency('quote', 'GBP');

  const getConversionRate = () => {
    const baseRate = rates[baseCurrency];
    const quoteRate = rates[quoteCurrency];
    return quoteRate / baseRate;
  };

  const getCurrenciesList = () => (rates !== null ? Object.keys(rates) : []);

  const contextValues = {
    baseCurrency,
    setBaseCurrency,
    quoteCurrency,
    setQuoteCurrency,
    conversionRate: rates !== null ? getConversionRate() : 0,
    currenciesList: getCurrenciesList(),
  };

  return (
    <CurrencyContext.Provider value={contextValues}>
      {children}
    </CurrencyContext.Provider>
  );
};
