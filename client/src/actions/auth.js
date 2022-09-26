import {LOGIN, SIGN_UP, LOGOUT } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signup = ({ username, password }) => async (dispatch) => {
  
    try {
        const { data } = api.post('signup', { username, password })
       
            dispatch({
              type: SIGN_UP, payload: data
            });

    }  catch (error) {
        console.log(error.message);
            dispatch({
                type: REGISTER_FAIL
            });
    }
};

export const login = ({ username, password }) => async (dispatch) => {
  
    try {
        const { data } = api.post('login', { username, password })
            dispatch({
              type: LOGIN, payload: data
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
    dispatch({type: LOGOUT});
}
