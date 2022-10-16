import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;


// import { 
//   USER_LOADED,
//   SIGN_UP_SUCCESS, 
//   LOGIN_SUCCESS, 
//   LOAD_USERS,
//   LOGOUT, 
//   AUTH,
// } from '../constants/actionTypes';

// const initialState = {
//     token: localStorage.getItem("token"),
//     isAuthenticated: false,
//     loading: true,
//     users: null,
//   }

// export default (state = initialState, action) => {
//     const {type, payload} = action;
//   switch (type) {
//     case LOAD_USERS:
//       return {
//         ...state,
//         users: payload,
//         isAuthenticated: true,
//         loading: false,
//       };
//     case USER_LOADED:
//           return {
//             ...state,
//             loading: false,
//           };
//     case LOGIN_SUCCESS:
//             return {
//               ...state,
//               users: payload,
//               isAuthenticated: true, 
//               loading: false,
//             };
//     case SIGN_UP_SUCCESS:
//             return  {
//               users: payload,
//               isAuthenticated: true, 
//               loading: false
//             };
//     case LOGOUT:
//       return  {
//         isAuthenticated: false, 
//         loading: false,
//         users: null,
//       };
//  default:
//     return state;
//   }
// };


