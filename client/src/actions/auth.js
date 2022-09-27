import {LOGIN_SUCCESS, LOGIN_FAIL, SIGN_UP_SUCCESS, SIGN_UP_FAIL, LOGOUT } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signup = ({ username, password }) => async (dispatch) => {
  
    try {
        const { data } = api.post('signup', { username, password })
       
        localStorage.setItem('token', data.token);
            dispatch({
              type: SIGN_UP_SUCCESS, payload: data
            });

    }  catch (error) {
        console.log(error.message);
            dispatch({
                type: SIGN_UP_FAIL
            });
    }
};

export const login = ({ username, password }) => async (dispatch) => {
  
    try {
        const { data } = api.post('login', { username, password })
        localStorage.setItem('token', data.token);
            dispatch({
              type: LOGIN_SUCCESS, payload: data
            });

    }  catch (error) {
        console.log(error.message);
             dispatch({
                type: LOGIN_FAIL
            });
    }
};

//log out 
export const logout = () => dispatch=>{
    localStorage.removeItem('token');
    dispatch({type: LOGOUT});
}

