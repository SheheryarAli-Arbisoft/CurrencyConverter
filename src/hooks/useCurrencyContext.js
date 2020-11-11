import { useContext } from 'react';
import { CurrencyContext } from '../contexts/CurrencyContext';

export const useCurrencyContext = () => useContext(CurrencyContext);
