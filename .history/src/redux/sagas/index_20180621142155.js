import { all } from 'redux-saga/effects';
import AppSubmitSaga from './sagas/AppSub'

export default function* rootSaga() {
  yield all([
    AppSubmitSaga(),
    // userSaga(),
    // watchIncrementAsync()
  ]);
}
