import { combineReducers } from 'redux';
import user from './userReducer';
import pplication from './applicationReducer';


const store = combineReducers({
  user,
  application
});

export default store;
