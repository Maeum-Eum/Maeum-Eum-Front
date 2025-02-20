import axios from 'axios';
import { SignUpState } from '../store/signUpStore';

import { IProfileImage } from './myPage';
import { apiClient } from '../api/api';

export const postValidateId = async (id: string) => {
  const response = await apiClient.post('/api/validateID', { id: id });
  return response.status;
};

export const postManagerSignUp = async (formData: SignUpState['formData']) => {
  const response = await apiClient.post('/api/manager/register', {
    id: formData.id,
    password: formData.password,
    name: formData.name,
    address: formData.centerAddress.roadAddress,
    phone: formData.phone,
    hasCar: formData.hasCar,
    centerId: formData.centerAddress.centerId,
  });
  return response.data;
};

export const postCareGiverSignUp = async (
  formData: SignUpState['formData']
) => {
  const response = await apiClient.post('/api/caregiver/register', {
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

export interface ICenter {
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
  const response = await apiClient.get(`/api/center?keyword=${centerName}`);
  return response.data as ICenter[];
};

export const postPhoto = async ({ file, id }: { file: File; id: string }) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post(`/api/caregiver/register/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log('업로드 성공:', response.data);
  return response.data as IProfileImage;
};
