import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://goit-node-rest-api-q4jk.onrender.com/api',
});
