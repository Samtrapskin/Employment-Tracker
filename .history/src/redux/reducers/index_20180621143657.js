import { combineReducers } from 'redux';
import user from './userReducer';
import application from './applicationReducer';


const store = combineReducers({
  user,
  application,  
});

export default store;
