import axios from 'axios';

const apiBD = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: apiBD
});

export default api;
