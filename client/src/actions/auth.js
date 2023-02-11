import {
    AUTH,
} from '../constants/actionTypes';
import * as api from '../api/index.js';


export const login = (formData) => async (dispatch) => {
    try {
      const { data } = await api.login(formData);
  
      dispatch({ type: AUTH, data });

    } catch (error) {
      console.log(error);
    }
  };


export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);

    dispatch({ type: AUTH, data });

  } catch (error) {
    console.log(error);
  }
};




