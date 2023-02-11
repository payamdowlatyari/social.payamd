import axios from 'axios';

const setAuthToken = token => {
  if (token) axios.defaults.headers.common['Authorization'] = token;
  else delete axios.defaults.headers.common['Authorization']; 
};

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }
//   return req;
// });

export default setAuthToken;