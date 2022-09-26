import { SIGN_UP, LOGIN } from '../constants/actionTypes';

const initialState={
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default (state=initialState, action) => {
    const {type, payload}=action;
  switch (type) {
    case LOGIN:
        localStorage.setItem("token",payload.token);
            return {...state, ...payload, isAuthenticated: true, loading: false}
    case SIGN_UP:
            return  {...state, ...payload, isAuthenticated: true, loading: false}
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
 default:
    return state;
  }
};


