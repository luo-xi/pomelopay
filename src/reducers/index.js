import { combineReducers } from 'redux';
import transReducer from './trans-reducer';

const allReducers = {
    transactions: transReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;