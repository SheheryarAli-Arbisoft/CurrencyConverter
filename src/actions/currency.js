import {
  CURRENCY_LOAD_ALL_DATA,
  CURRENCY_ALL_DATA_LOADED,
  CURRENCY_ERROR,
} from './types';

export const loadAllData = () => ({
  type: CURRENCY_LOAD_ALL_DATA,
});

export const allDataLoaded = data => ({
  type: CURRENCY_ALL_DATA_LOADED,
  payload: data,
});

export const errorOccurred = err => ({
  type: CURRENCY_ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});
