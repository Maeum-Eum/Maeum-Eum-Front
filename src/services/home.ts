import { authApiClient } from './api';

interface IContent {
  contactId: number;
  center: string;
  title: string;
  createdAt: string;
  wage: number;
  negotiable: boolean;
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
