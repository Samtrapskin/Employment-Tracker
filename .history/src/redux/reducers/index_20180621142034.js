import { combineReducers } from 'redux';
import user from './userReducer';
import Application from './'
const store = combineReducers({
  user,

});

export default store;
