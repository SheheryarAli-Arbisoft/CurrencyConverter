import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import queryString from 'query-string';
import { API_URL, ACCESS_KEY } from '@env';
import { CURRENCY_LOAD_ALL_DATA } from '../actions/types';
import { allDataLoaded, errorOccurred } from '../actions/currency';

const generateApiUrl = () => {
  const params = queryString.stringify({
    access_key: ACCESS_KEY,
  });

  return `${API_URL}?${params}`;
};

function* loadAllData() {
  try {
    const res = yield call(() => axios.get(generateApiUrl()));

    yield put(allDataLoaded(res.data.rates));
  } catch (err) {
    yield put(errorOccurred(err));
  }
}

export function* currencySaga() {
  yield takeEvery(CURRENCY_LOAD_ALL_DATA, loadAllData);
}
