import axios from 'axios';

const url = "https://google-keep-server.herokuapp.com/posts"; // production
// const url = "http://localhost:5000/posts" // development

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);