import { authApiClient } from './api';

interface IContent {
  contactId: number;
  center: string;
  title: string;
  createdAt: string;
  wage: number;
  negotiable: boolean;
  bookmarked: boolean;
}
export interface IGetMainList {
  totalPages: number;
  totalElements: number;
  size: number;
  content: IContent[];
  first: boolean;
  last: boolean;
}

export const getMainList = async ({
  range,
  sort,
  page,
}: {
  range: string;
  sort: string;
  page: string;
}) => {
  const response = await authApiClient.get(
    `/caregiver/main/list?range=${range}&sort=${sort}&page=${page}`
  );
  return response.data as IGetMainList;
};

export const getMatchDetail = async ({ contactId }: { contactId: number }) => {
  const response = await authApiClient.get(
    `/caregiver/main?contact=${contactId}`
  );
  return response.data;
};

export const postBookmark = async ({ contactId }: { contactId: number }) => {
  const response = await authApiClient.post(
    `/caregiver/main/bookmark?contact=${contactId} `
  );
  return response.status;
};
export interface CaregiverSupport {
  resume_id: number;
  caregiver_id: number;
  title: string;
  wage: number;
  experience: boolean;
  caregiverSupport: string[];
  createAt: string;
}

export interface Elder {
  elder_id: number;
  name: string;
  caregivers: CaregiverSupport[];
}
export const getRecommendCaregiverList = async ({
  name,
  distance,
  sort,
}: {
  name: string;
  distance: string;
  sort: string;
}) => {
  const response = await authApiClient.get(
    `/api/manager/elder/individual?name=${name}&distance=${distance}&sort=${sort}`
  );
  return response.data as Elder;
};

//TODO 백엔드와 상의 후 수정 필요
export interface ICareGiverDetailInfo {
  caregiverId: number;
  resumeId: number;
  title: string;
  jobPosition: string[];
  certificateCode: string;
  hasDementiaTraining: 'COMPLETE' | 'INCOMPLETE'; // 치매 교육 여부
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

export const getRecommendCaregiver = async ({
  caregiverId,
}: {
  caregiverId: number;
}) => {
  const response = await authApiClient.get(`/api/manager/${caregiverId}`);
  return response.data as ICareGiverDetailInfo;
};

export interface IUserRole {
  role: 'ROLE_CAREGIVER' | 'ROLE_MANAGER';
}
export const getUserRole = async () => {
  const response = await authApiClient.get('/user');
  return response.data as IUserRole;
};
