import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';



function* getExpenseInfo(action){
    console.log('GET expense saga triggered', action)
    try {
        const addExpenseInfoResponse = yield call(axios.get, '/api/expense');
        console.log(addExpenseInfoResponse) 
        yield put({
            type: 'SET_EXPENSE_DATA', // for the reducer
            payload: addExpenseInfoResponse.data // data to use
        })
    } catch (error) {}
}