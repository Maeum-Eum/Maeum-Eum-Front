import axios from 'axios';
import { authApiClient } from './api';

interface ICareGiverMyPage {
  name: string;
  address: string;
  profileImage: string;
  isResumeRegistered: boolean;
  isJobOpen: boolean;
  savedEldersCount: number;
  managerContactCount: number;
}
export const GetCareGiverMyPage = async () => {
  const response = await authApiClient.get('/caregiver/mypage');

  return response.data as ICareGiverMyPage;
};
export interface IJobOpen {
  isJobOpen: boolean;
}
export const PostJobOpen = async () => {
  const response = await authApiClient.post('/caregiver/mypage/job-open');
  return response.data as IJobOpen;
};
export interface IProfileImage {
  isProfileImage: string;
}
export const GetProfilePhoto = async () => {
  const response = await authApiClient.get('/caregiver/mypage/profile');
  return response.data as IProfileImage;
};

export const deleteProfilePhoto = async () => {
  const response = await authApiClient.delete('/caregiver/mypage/profile');
  return response.data as IProfileImage;
};

export const postPhoto = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const token = localStorage.getItem('accessToken');

  const response = await axios.post('/caregiver/mypage/profile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
  console.log('업로드 성공:', response.data);
  return response.data as IProfileImage;
};
