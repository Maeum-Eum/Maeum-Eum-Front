import axios from 'axios';
import { SignUpState } from '../store/signUpStore';
import { apiClient } from './api';
import { IProfileImage } from './myPage';

export const postValidateId = async (id: string) => {
  const response = await apiClient.post('/validateID', { id: id });
  return response.data;
};

export const postManagerSignUp = async (formData: SignUpState['formData']) => {
  const response = await apiClient.post('/manager/register', {
    id: formData.id,
    password: formData.password,
    name: formData.name,
    address: formData.centerAddress.roadAddress,
    phone: formData.phone,
    hasCar: formData.hasCar,
  });
  return response.data;
};

export const postCareGiverSignUp = async (
  formData: SignUpState['formData']
) => {
  const response = await apiClient.post('/caregiver/register', {
    id: formData.id,
    password: formData.password,
    name: formData.name,
    address: formData.address.roadAddress,
    phone: formData.phone,
    experience: formData.experience,
    introduction: formData.introduction,
  });
  return response.data;
};

interface ICenter {
  centerId: number;
  centerName: string;
  address: string;
  designatedTime: string;
  installationTime: string;
  detailAddress: string;
  zipCode: string;
  centerCode: string;
}

export const getCenterList = async ({ centerName }: { centerName: string }) => {
  const response = await apiClient.get(`/center?name=${centerName}`);
  return response.data as ICenter;
};

export const postPhoto = async ({ file, id }: { file: File; id: string }) => {
  const formData = new FormData();
  formData.append('file', file);
  const token = localStorage.getItem('accessToken');

  const response = await axios.post(`/api/caregiver/register/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
  console.log('업로드 성공:', response.data);
  return response.data as IProfileImage;
};
