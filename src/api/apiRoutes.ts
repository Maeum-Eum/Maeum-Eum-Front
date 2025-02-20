export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/login',
    LOGOUT: '/api/logout',
    REGISTER_MANAGER: '/api/manager/register',
    REGISTER_CAREGIVER: '/api/caregiver/register',
    USER_INFO: '/api/user',
    REISSUE_TOKEN: '/api/reissue',
    UPLOAD_PROFILE: (loginId: string) => `/api/caregiver/register/${loginId}`,
  },

  MANAGER: {
    REGISTER: '/api/manager/register',
    ELDER_CREATE: '/api/manager/elder/create',
    ELDER_INDIVIDUAL: (name: string, distance: string, sort: string) =>
      `/api/manager/elder/individual?name=${name}&distance=${distance}&sort=${sort}`,
    CAREGIVER_DETAIL: (caregiverId: number) => `/api/manager/${caregiverId}`,
    MY_PAGE: '/api/manager/mypage',
    CENTER_DETAIL: (centerId: number) => `/api/center/${centerId}`,
    CENTER_LIST: '/api/manager/center',
    CONTACT_BY_NAME: (name: string) => `/api/manager/contact?name=${name}`,
    CONTACT_BY_NAME_AND_STATE: (name: string, state: string) =>
      `/api/manager/contact?name=${name}&state=${state}`,
    BOOKMARK_BY_NAME: (name: string) => `/api/manager/bookmark?name=${name}`,
    CONTACT_DETAIL_BY_ID: (contactId: number) =>
      `/api/manager/contact/${contactId}`,
    BOOKMARK_LIST: '/api/manager/bookmark',
    BOOKMARK_DETAIL: (bookmarkId: number) =>
      `/api/manager/bookmark/${bookmarkId}`,
  },

  CAREGIVER: {
    MAIN_LIST: '/api/caregiver/main/list',
    MATCH_DETAIL: (contactId: number) =>
      `/api/caregiver/main?contact=${contactId}`,
    ACCEPT_REQUEST: (contactId: number) =>
      `/api/caregiver/main/accept?contact=${contactId}`,
    REJECT_REQUEST: (contactId: number) =>
      `/api/caregiver/main/reject?contact=${contactId}`,
    BOOKMARK_REQUEST: (contactId: number) =>
      `/api/caregiver/main/bookmark?contact=${contactId}`,
    BOOKMARK_ELDER: (elderId: number) =>
      `/api/caregiver/near/bookmark?elderId=${elderId}`,
    NEAR_ELDER_DETAIL: (elderId: number) => `/api/caregiver/near/${elderId}`,
    MY_PAGE: '/api/caregiver/mypage',
    MY_PAGE_JOB_OPEN: '/api/caregiver/mypage/job-open',
    MY_PAGE_PROFILE: '/api/caregiver/mypage/profile',
    RESUME: '/api/caregiver/resume',
    RESUME_CREATE: '/api/caregiver/resume/create',
    RESUME_SALARY: '/api/caregiver/resume/salary',
  },

  REGION: {
    SEOUL: '/api/region/seoul',
    CENTER_SEARCH: (centerName: string) => `/api/center?name=${centerName}`,
  },
};
