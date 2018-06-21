import { all } from 'redux-saga/effects';
import AppSubmitSaga from 

export default function* rootSaga() {
  yield all([
    AppSubmitSaga(),
    // userSaga(),
    // watchIncrementAsync()
  ]);
}
