import axios from 'axios';

const url = 'http://localhost:8080';

export const login = (data) => axios.post(`${url}/users/login`, data);
export const signup = (data) => axios.post(`${url}/users/signup`, data); 

export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPost = (newPost) => axios.post(`${url}/posts`, newPost);
export const likePost = (id) => axios.put(`${url}/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.put(`${url}/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`);
