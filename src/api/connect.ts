import axios from 'axios';

const api = axios.create({
  baseURL: 'https://contacts-api.prd.parceirodaconstrucao.com.br',
  headers: {
    'content-type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const url = config.url || '';
  const token = localStorage.getItem('token');
  const exceptions = ['/auth/login'];

  if (exceptions.includes(url) || !token) {
    return config;
  }

  const headers = { ...config.headers, Authorization: `Bearer ${token}` };
  const newConfig = { ...config, headers };
  return newConfig;
}, (error) => Promise.reject(error));

export default api;
