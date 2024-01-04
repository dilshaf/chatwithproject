import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:7000' });

export const createChat = (data) => API.post('/api/chats/postChat', data);

export const userChats = (id) => API.get(`/api/chats/${id}`);

export const findChat = (firstId, secondId) => API.get(`/api/chats/find/${firstId}/${secondId}`);