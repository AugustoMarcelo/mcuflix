import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mcuapi.up.railway.app/api/v1',
});

export default api;
