import axios from 'axios';

const API_BASE_URL = '/api';

// 기본 axios 인스턴스 생성
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 토큰 필요 axios 인스턴스 생성
export const authApiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 토큰 자동 추가
authApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); // 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 에러 처리
authApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API 요청 에러:', error);
    return Promise.reject(error.response ? error.response.data : error);
  }
);
