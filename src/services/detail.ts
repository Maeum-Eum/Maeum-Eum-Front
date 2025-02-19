import { authApiClient } from './api';

export interface IDetailCenter {
  centerName: string;
  hasCar: boolean;
  finalGrade: string;
  installationTime: string;
}

export interface IElder {
  rank: number;
  gender: string;
  address: string;
  meal: string[];
  toileting: string[];
  mobility: string[];
  daily: string[];
  family: string;
  pet: string;
}

export interface IDetailContactElder {
  contactId: number;
  center: IDetailCenter;
  message: string;
  title: string;
  createdAt: string;
  wage: number;
  negotiable: boolean;
  bookmarked: boolean;
  elder: IElder;
}

export const getDetailContactElder = async (contactId: number) => {
  const response = await authApiClient.get(
    `/caregiver/main?contact=${contactId}`
  );
  return response.data as IDetailContactElder;
};

export interface IDetailNearElder {
  elderId: number;
  center: IDetailCenter;
  title: string;
  wage: number;
  negotiable: boolean;
  bookmarked: boolean;
  elder: IElder;
  createdAt: string;
}
export const getDetailNearElder = async (elderId: number) => {
  const response = await authApiClient.get(
    `/caregiver/near?elderId=${elderId}`
  );
  return response.data as IDetailNearElder;
};
