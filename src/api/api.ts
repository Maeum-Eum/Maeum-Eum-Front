import axios from 'axios';
import { useLoginStore } from '../store/loginStore';

export const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authApiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

authApiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers['authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: Access Token 만료 시 갱신
authApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Access Token 만료 시 처리
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const refreshResponse = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/reissue`,
          {},
          {
            headers: {
              'X-Refresh-Token': refreshToken,
            },
          }
        );

        if (refreshResponse.status === 200) {
          const newAccessToken = refreshResponse.headers['authorization'];
          const newRefreshToken = refreshResponse.headers['x-refresh-token'];

          if (newAccessToken) {
            localStorage.setItem(
              'accessToken',
              newAccessToken.replace('Bearer ', '')
            );
          }
          if (newRefreshToken) {
            localStorage.setItem('refreshToken', newRefreshToken);
          }

          originalRequest.headers['authorization'] = `Bearer ${newAccessToken}`;
          return authApiClient(originalRequest);
        }
      } catch (refreshError) {
        console.error('Access Token 재발급 실패:', refreshError);
        useLoginStore.getState().logout();
        window.location.href = '/login';
      }
    }

    console.error(
      'api error: ',
      error?.response?.data?.message || error.message
    );
    return Promise.reject(error);
  }
);
