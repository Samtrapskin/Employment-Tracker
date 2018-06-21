import { combineReducers } from 'redux';
import user from './userReducer';
import addApplication from './applicationReducer';


const store = combineReducers({
  user,
  addApplication
});

export default store;
