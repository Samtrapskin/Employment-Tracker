import { combineReducers } from 'redux';
import user from './userReducer';
import application from './applicationReducer';


const store = combineReducers({
  user,
  applicationReducer,  
});

export default store;
