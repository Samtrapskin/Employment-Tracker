import { combineReducers } from 'redux';
import user from './userReducer';
import addApplication from './applicationReducer';


const store = combineReducers({
  user,
  application
});

export default store;
