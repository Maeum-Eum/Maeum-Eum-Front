import { authApiClient } from '../api/api';

export const postApproveMatching = async (contactId: number) => {
  return await authApiClient.post(
    `/caregiver/main/accept?contact=${contactId}`
  );
};
export const postRejectMatching = async (contactId: number) => {
  return await authApiClient.post(
    `/caregiver/main/reject?contact=${contactId}`
  );
};

export const postContactBookmark = async (contactId: number) => {
  return await authApiClient.post(
    `/caregiver/main/bookmark?contact=${contactId}`
  );
};

export const postElderBookmark = async (elderId: number) => {
  return await authApiClient.post(
    `/caregiver/near/bookmark?elderId=${elderId}`
  );
};

export const postCareBookmark = async (
  elderId: number,
  caregiverId: number
) => {
  return await authApiClient.post(`/manager/bookmark`, {
    elderId,
    caregiverId,
  });
};

export const deleteCareBookmark = async (bookmarkId: number) => {
  return await authApiClient.delete(`/manager/bookmark/${bookmarkId}`);
};
interface IPostApply {
  phone: string;
  message: string;
}

interface IPostAccept {
  phone: string;
  title: string;
}

export const postApply = async (elderId: string, apply: IPostApply) => {
  const response = await authApiClient.post(
    `/caregiver/near?elderId=${elderId}`,
    {
      phone: apply.phone,
      message: apply.message,
    }
  );
  return response.data['title'];
};

export const postAcceptContact = async (
  contactId: string,
  apply: IPostApply
) => {
  const response = await authApiClient.post(
    `/caregiver/main/accept?contact=${contactId}`,
    {
      phone: apply.phone,
      message: apply.message,
    }
  );
  return response.data as IPostAccept;
};

export const postApplyAccept = async (applyId: number) => {
  return await authApiClient.post(`/manager/apply/${applyId}`);
};

export const deleteApplyDecline = async (applyId: number) => {
  return await authApiClient.delete(`/manager/apply/${applyId}`);
};
