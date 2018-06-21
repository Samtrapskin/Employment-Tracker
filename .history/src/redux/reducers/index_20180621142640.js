import { combineReducers } from 'redux';
import user from './userReducer';
import Application from './applicationReducer';
const store = combineReducers({
  user,
  applicationReducer,  
});

export default store;
