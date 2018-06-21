import { all } from 'redux-saga/effects';
import AppSubmitSaga from './sagas/AppSubmitSaga';

export default function* rootSaga() {
  yield all([
    AppSubmitSaga(),
    // userSaga(),
    // watchIncrementAsync()
  ]);
}
