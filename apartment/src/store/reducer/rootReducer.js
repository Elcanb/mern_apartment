import { combineReducers } from 'redux';

import advert from './advert';
import auth from './auth';
import error from './error'

export default combineReducers({
    advert,
    auth,
    error
})