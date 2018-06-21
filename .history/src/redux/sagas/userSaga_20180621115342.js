import { put, takeLatest } from 'redux-saga/effects';
import { callUser } from '../requests/userRequests';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  
}
/*
  Starts fetchUser on each dispatched `FETCH_USER` action.
  Allows concurrent fetches of user.
*/
function* userSaga() {
  yield takeEvery('FETCH_USER', fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "FETCH_USER" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* userSaga() {
}

export default userSaga;
