import { combineReducers } from 'redux';
import addApplication from './applicationReducer';


const store = combineReducers({
  user,
  addApplication
});

export default store;
