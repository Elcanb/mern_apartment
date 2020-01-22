import axios from 'axios';
import { returnError } from './error';

import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS,
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_FAIL,
    LOGIN_FAIL
} from './types';

//Load User
export const loadUser = () => (dispatch, getState) => {

    dispatch({ type: USER_LOADING });

    axios.get('api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({ type: AUTH_ERROR });
        })
}

//Login User
export const login = (user) => dispatch => {

    dispatch({ type: USER_LOADING });

    const { email, password } = user;
    const body = JSON.stringify({ email, password });

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    axios.post('/api/auth/', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({ type: LOGIN_FAIL });
        })
}

//Register User
export const register = (user) => dispatch => {

    dispatch({ type: USER_LOADING });

    const { name, surname, email, password } = user;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({ name, surname, email, password });

    axios.post('/api/users/', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({ type: REGISTER_FAIL })
        })
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_SUCCESS })
}

//helper function
export const tokenConfig = (getState) => {
    const token = getState().auth.token;

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    token && (headerConfig.headers['x-auth-token'] = token);

    return headerConfig;
}


