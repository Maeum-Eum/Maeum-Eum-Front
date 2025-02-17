import axios from 'axios';

export const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      config.headers['X-Refresh-Token'] = refreshToken;
    }
    console.log('Request Headers:', config.headers);
    console.log('Request Headers1:', accessToken);
    console.log('Request Headers:2', refreshToken);
    return config;
  },
  (error) => Promise.reject(error)
);
