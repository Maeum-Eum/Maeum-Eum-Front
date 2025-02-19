import { apiClient, authApiClient } from './api';
import { API_ROUTES } from './apiRoutes';

export const authService = {
  login: async (credentials: { id: string; password: string }) => {
    const response = await apiClient.post(API_ROUTES.AUTH.LOGIN, credentials, {
      withCredentials: true,
    });

    console.log('🛠️ API 응답 헤더:', response.headers);

    return {
      status: response.status,
      accessToken: response.headers['Authorization'],
      refreshToken: response.headers['X-refresh-token'],
    };
  },

  logout: async () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return authApiClient.post(API_ROUTES.AUTH.LOGOUT);
  },
};

// 이력서 등록
export const submitResume = async () => {
  try {
    const response = await apiClient.post(API_ROUTES.CAREGIVER.RESUME_CREATE);
    return response.data;
  } catch (error) {
    console.error('Failed to submit resume', error);
    throw error;
  }
};

// 이력서 조회
export const getResume = async () => {
  try {
    const response = await apiClient.get(API_ROUTES.CAREGIVER.RESUME);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch resume', error);
    throw error;
  }
};

// 어르신 등록
export const submitEider = async () => {
  try {
    const response = await apiClient.post(API_ROUTES.MANAGER.ELDER_CREATE);
    return response.data;
  } catch (error) {
    console.error('Fail to fetch submit', error);
    throw error;
  }
};
