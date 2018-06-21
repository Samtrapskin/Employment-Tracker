import { combineReducers } from 'redux';
import user from './userReducer';

const store = combineReducers({
  user,
  login,
});

export default store;
