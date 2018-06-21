import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';



// function* getExpenseInfo(action){
//     console.log('GET expense saga triggered', action)
//     try {
//         const addExpenseInfoResponse = yield call(axios.get, '/api/expense');
//         console.log(addExpenseInfoResponse) 
//         yield put({
//             type: 'SET_EXPENSE_DATA', // for the reducer
//             payload: addExpenseInfoResponse.data // data to use
//         })
//     } catch (error) {}
// }

function* addApplicationInfo(action, name){
    console.log('POST Application saga triggered', action)
    try {
        yield call(axios.post, '/api/table', action.payload);
        yield put({
            type: 'GET_EXPENSE',
        })
    } catch (error) {}
}

function* addApplicationSaga() {
    // When GET_TOTALS is dispached, call the getUserInfo function
    // yield takeEvery('GET_EXPENSE', getExpenseInfo);
    yield takeEvery('ADD_APPLICATION', addApplicationInfo);
    // yield takeEvery('DELETE_EXPENSE', deleteExpenseInfo);
    // yield takeEvery('UPDATE_EXPENSE', updateExpenseInfo);

}

export default addApplicationSaga;
