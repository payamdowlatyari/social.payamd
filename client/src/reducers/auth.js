import { SIGN_UP_SUCCESS, SIGN_UP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../constants/actionTypes';

const initialState={
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default (state=initialState, action) => {
    const {type, payload}=action;
  switch (type) {
    case LOGIN_SUCCESS:
        localStorage.setItem("token",payload.token);
            return {...state, ...payload, isAuthenticated: true, loading: false}
    case SIGN_UP_SUCCESS:
        localStorage.setItem("token",payload.token);
            return  {...state, ...payload, isAuthenticated: true, loading: false}
    case SIGN_UP_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
 default:
    return state;
  }
};


