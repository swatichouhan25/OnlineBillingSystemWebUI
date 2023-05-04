import { combineReducers } from 'redux';
import prodReducer from './prodReducer';
import registerReducer from './registerReducer';

// use combineReducers to get single object containing all reducers
const allReducers = combineReducers({ prod: prodReducer }, { regi: registerReducer });

export default allReducers;
