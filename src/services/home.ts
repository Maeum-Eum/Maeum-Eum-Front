import { authApiClient } from '../api/api';

interface IContent {
  contactId: number;
  center: string;
  title: string;
  createdAt: string;
  wage: number;
  negotiable: boolean;
  bookmarked: boolean;
  meal: boolean;
  toileting: boolean;
  mobility: boolean;
  daily: boolean;
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
    `/api/caregiver/main/list?range=${range}&order=${sort}&page=${page}`
  );
  return response.data as IGetMainList;
};

export const getMatchDetail = async ({ contactId }: { contactId: number }) => {
  const response = await authApiClient.get(
    `/api/caregiver/main?contact=${contactId}`
  );
  return response.data;
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

export interface IUserRole {
  role: 'ROLE_CAREGIVER' | 'ROLE_MANAGER';
}
export const getUserRole = async () => {
  const response = await authApiClient.get('/user');
  return response.data as IUserRole;
};
export interface INearElder {
  elderId: number;
  center: string;
  title: string;
  wage: number;
  negotiable: boolean;
  meal: boolean;
  toileting: boolean;
  mobility: boolean;
  daily: boolean;
}

export interface INearElderList {
  meal?: INearElder;
  toileting?: INearElder;
  wage?: INearElder;
}
export const getNearElder = async (range: string) => {
  const response = await authApiClient.get(
    `/api/caregiver/near/list?range=${range}`
  );

  return response.data as INearElderList;
};
export interface IManagerMain {
  caregiverId: number;
  caregiverName: string;
  resumeId: number;
  title: string;
  negotiable: boolean;
  wage: number;
  possibleTasks: string[];
  isBookmarks: boolean;
  bookmarkId: number | null;
  createAt: string;
}

export const getManagerHome = async ({
  name,
  distance,
  sort,
}: {
  name: string;
  sort: string;
  distance: string;
}) => {
  const response = await authApiClient.get(
    `/api/manager/elder/individual?name=${name}&distance=${distance}&sort=${sort}`
  );

  return response.data as IManagerMain[];
};

export interface IElder {
  elderId: number;
  elderName: string;
}
export const getElderList = async () => {
  const res = await authApiClient.get(`/api/manager/elder`);
  return res.data as IElder[];
};
