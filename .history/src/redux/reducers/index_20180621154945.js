import { combineReducers } from 'redux';
import addApplication from './applicationReducer';


const store = combineReducers({
  addApplication
});

export default store;
