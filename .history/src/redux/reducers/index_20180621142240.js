import { combineReducers } from 'redux';
import user from './userReducer';
import Application from './ApplicationReducer';
const store = combineReducers({
  user,
  
});

export default store;
