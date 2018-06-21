import { combineReducers } from 'redux';
import user from './userReducer';
import Application from './Application'
const store = combineReducers({
  user,

});

export default store;
