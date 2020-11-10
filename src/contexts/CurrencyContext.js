import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();

export const CurrencyContextProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [quoteCurrency, setQuoteCurrency] = useState('GBP');
  const [conversionRate] = useState(0.8345);

  const contextValues = {
    baseCurrency,
    setBaseCurrency,
    quoteCurrency,
    setQuoteCurrency,
    conversionRate,
  };

  return (
    <CurrencyContext.Provider value={contextValues}>
      {children}
    </CurrencyContext.Provider>
  );
};
