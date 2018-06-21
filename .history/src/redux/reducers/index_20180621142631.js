import { combineReducers } from 'redux';
import user from './userReducer';
import Application from './applicationReducer';
const store = combineReducers({
  user,
  ApplicationReducer,  
});

export default store;
