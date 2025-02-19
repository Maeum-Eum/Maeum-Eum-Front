import { authApiClient } from './api';
import { IGetMainList } from './home';

export interface ICareGiverMyPage {
  name: string;
  address: string;
  profileImage: string;
  resumeRegistered: boolean;
  jobOpen: boolean;
  savedEldersCount: number;
  managerContactCount: number;
  applyCount: number;
}
export const GetCareGiverMyPage = async () => {
  const response = await authApiClient.get('/caregiver/mypage');

  return response.data as ICareGiverMyPage;
};
export interface ISocialWorkerMyPage {
  managerId: number;
  name: string;
  phoneNumber: string;
  centerId: number;
  centerName: string;
  hasCar: boolean;
  oneLineIntro: string;
  sentContacts: number;
  bookmarks: number;
}

export const getSocialWorkerMyPage = async () => {
  const response = await authApiClient.get('/manager/mypage');

  return response.data as ISocialWorkerMyPage;
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

// export const postPhoto = async (file: File) => {
//   const formData = new FormData();
//   formData.append('file', file);
//   const token = localStorage.getItem('accessToken');

//   const response = await axios.post('/caregiver/mypage/profile', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   console.log('업로드 성공:', response.data);
//   return response.data as IProfileImage;
// };

export const getCareGiverInbox = async ({ tab, page }: IBoxRequest) => {
  const response = await authApiClient.get(
    `/caregiver/mypage/contacts?tab=${tab}&page=${page}`
  );
  return response.data as IGetMainList;
};
export interface IOutgoingBoxContent {
  applyId: number;
  center: string;
  title: string;
  wage: number;
  negotiable: boolean;
  meal: boolean; // 관련 업무 가능 여부
  toileting: boolean;
  mobility: boolean;
  daily: boolean;
}

export interface IOutgoingBox {
  totalPages: number;
  totalElements: number;
  size: number;
  content: IOutgoingBoxContent[];
  first: boolean;
  last: boolean;
}

export interface IBoxRequest {
  tab: 'pending' | 'approved';
  page: number;
}
export const getCareGiverOutGoingBox = async ({ tab, page }: IBoxRequest) => {
  const response = await authApiClient.get(
    `/caregiver/mypage/applies?tab=${tab}&page=${page}`
  );
  return response.data as IOutgoingBox;
};

export const patchCenterInfo = async (
  centerId: number,
  oneLineIntro: string,
  hasCar: boolean
) => {
  return await authApiClient.patch(`/api/manager/${centerId}`, {
    oneLineIntro: oneLineIntro,
    hasCar: hasCar,
    centerId: centerId,
  });
};
