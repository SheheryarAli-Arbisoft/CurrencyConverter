import { createSelector } from 'reselect';

export const ratesSelector = createSelector(
  state => state.currency.rates,
  rates => rates
);
