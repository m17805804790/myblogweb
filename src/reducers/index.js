import {combineReducers} from 'redux';
import flashMessages from './FlashMessages';
import signin from './signin';

const rootReducer = combineReducers({
    flashMessages,
    signin
})

export default rootReducer;

