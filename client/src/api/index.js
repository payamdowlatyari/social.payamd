import axios from 'axios';

const url = 'http://localhost:8080';
// const url = 'social-payamd.herokuapp.com';

const API = axios.create({ baseURL: url});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

// Post APIs
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// User APIs
// POST 
export const login = (formData) => API.post('/users/login', formData);
export const signup = (formData) => API.post('/users/signup', formData);


// export const login = (data) => axios.post(`${url}/users/login`, data);
// export const signup = (data) => axios.post(`${url}/users/signup`, data); 

// // Post APIs
// // GET
// export const getUsers = () => axios.get(`${url}/users`);
// // GET
// export const getUser = (id) => axios.get(`${url}/users/${id}`);

// // GET
// export const fetchPost = (id) => API.get(`/posts/${id}`);
// export const fetchPosts = () => axios.get(`${url}/posts`);

// // POST
// export const createPost = (newPost) => axios.post(`${url}/posts`, newPost);

// // PUT
// export const likePost = (id, likedPost) => axios.put(`${url}/posts/${id}/likePost`, likedPost);
// export const updatePost = (id, updatedPost) => axios.put(`${url}/posts/${id}`, updatedPost);

// // DELETE
// export const deletePost = (id) => axios.delete(`${url}/posts/${id}`);
