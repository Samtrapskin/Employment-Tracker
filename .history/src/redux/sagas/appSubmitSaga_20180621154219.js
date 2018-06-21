import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';



function* getApplicationInfo(action){
    try {
        const addApplicationInfoResponse = yield call(axios.get, '/api/expense');
        yield put({
            type: 'SET_APPLICATION_DATA', // for the reducer
            payload: addApplicationInfoResponse.data // data to use
        })
    } catch (error) {}
}

function* addApplicationInfo(action, name){
    console.log('POST Application saga triggered', action)
    try {
        yield call(axios.post, '/api/table', action.payload);
        yield put({
            type: 'GET_APPLICATION',
        })
    } catch (error) {}
}

function* addApplicationSaga() {
    // When GET_TOTALS is dispached, call the getUserInfo function
    yield takeEvery('GET_APPLICATION', getApplicationInfo);
    yield takeEvery('ADD_APPLICATION', addApplicationInfo);
    // yield takeEvery('DELETE_EXPENSE', deleteExpenseInfo);
    // yield takeEvery('UPDATE_EXPENSE', updateExpenseInfo);

}

export default addApplicationSaga;
