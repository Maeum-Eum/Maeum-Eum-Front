import { authApiClient } from '../api/api';
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
  return await authApiClient.patch(`/manager/${centerId}`, {
    oneLineIntro: oneLineIntro,
    hasCar: hasCar,
    centerId: centerId,
  });
};
export interface IManagerMypage {
  managerId: number;
  name: string;
  phoneNumber: string;
  centerId: number;
  centerName: string;
  hasCar: boolean;
  oneLineIntro: string | null;
  sentContacts: number;
  bookmarks: number;
  applys: number;
}
export const getManagerMyPage = async () => {
  const res = await authApiClient.get('/manager/mypage');

  return res.data as IManagerMypage;
};

export interface IManagerInBox {
  applyId: number;
  approvalStatus: 'PENDING' | 'APPROVED' | 'REJECTED'; // 승인 상태
  centerId: number;
  centerName: string;
  elderId: number;
  elderName: string;
  negotiable: boolean;
  title: string;
  satisfyTasks: string[]; // 요양보호사가 만족하는 업무 리스트
  createdAt: string;
  updateAt: string;
}

export const getManagerInBox = async (name: string) => {
  const response = await authApiClient.get(`/manager/apply?name=${name}`);
  return response.data as IManagerInBox[];
};

export interface IManagerSend {
  managerContactId: number;
  approvalStatus: 'PENDING' | 'APPROVED'; // 승인 상태
  caregiverId: number;
  title: string;
  negotiable: boolean;
  centerId: number;
  centerName: string;
  wage: number;
  address: string;
  possibleTasks: string[];
}
export const getManagerSendPending = async (name: string) => {
  const response = await authApiClient.get(
    `/manager/contact?name=${name}&tab=pending`
  );
  return response.data as IManagerSend[];
};

export const getManagerSendApproved = async (name: string) => {
  const response = await authApiClient.get(
    `/manager/contact?name=${name}&tab=approved`
  );
  return response.data as IManagerSend[];
};

export interface IBookMarkElder {
  totalPages: number;
  totalElements: number;
  size: number;
  content: IBookMarkElderContent[];
  first: boolean;
  last: boolean;
}

export interface IBookMarkElderContent {
  elderId: number;
  center: string;
  title: string;
  wage: number;
  negotiable: boolean;
  meal?: boolean;
  toileting?: boolean;
  mobility?: boolean;
  daily?: boolean;
}
export const getBookmarkElders = async (page: number) => {
  const response = await authApiClient.get(
    `/api/caregiver/mypage/bookmarks?page=${page}`
  );
  return response.data as IBookMarkElder;
};

export const getBookMarkCareGivers = async (name: string) => {
  const response = await authApiClient.get(
    `/api/manager/bookmark?name=${name}`
  );
  return response.data as IBookMarkCareWorker[];
};
export interface IBookMarkCareWorker {
  bookmarkId: number;
  caregiverId: number;
  caregiverName: string;
  caregiverSupport: string[];
  resumeId: number;
  createdAt: string;
  updatedAt: string;
}
