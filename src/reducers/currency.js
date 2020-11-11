import { CURRENCY_ALL_DATA_LOADED, CURRENCY_ERROR } from '../actions/types';

const initialState = {
  rates: null,
  loading: true,
  errors: null,
};

export const currency = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CURRENCY_ALL_DATA_LOADED:
      return {
        ...state,
        loading: false,
        errors: null,
        rates: payload,
      };
    case CURRENCY_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};
