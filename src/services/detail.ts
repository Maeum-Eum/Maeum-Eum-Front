import { authApiClient } from '../api/api';

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

export interface ICareGiverDetailInfo {
  caregiverId: number;
  resumeId: number;
  title: string;
  jobPosition: string[];
  certificateCode: string;
  hasDementiaTraining: 'UNKNOWN' | 'COMPLETE' | 'NOT_COMPLETE';
  hasVehicle: boolean;
  workPlace: string[];
  workDay: string[];
  workTimeSlot: string[];
  isNegotiableTime: boolean;
  wage: number;
  elderRank: number[];
  meal: string[];
  toileting: string[];
  mobility: string[];
  daily: string[];
  preferredGender: 'MALE' | 'FEMALE' | 'EVERY'; // 성별 선호
  isFamilyPreferred: boolean;
  isPetPreferred: boolean;
  experience: ICareGiverExperience[];
  introduction: string;
  profileImage: string | null;
}

export interface ICareGiverExperience {
  startDate: string;
  endDate: string;
  centerId: string;
  work: string | null;
  center: string | null;
}

export const getDetailRecommendCaregiver = async (caregiverId: string) => {
  const response = await authApiClient.get(`/manager/${caregiverId}`);
  return response.data as ICareGiverDetailInfo;
};
