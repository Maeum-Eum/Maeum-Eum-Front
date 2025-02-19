import { useMemo } from 'react';
import { HomeCareWorker } from '../../pages/HomeCareWorker';
import { HomeSocialWorker } from '../../pages/HomeSocialWorker';
import { IGetMainList } from '../../services/home';

export const DynamicHome = () => {
  const role = useMemo(() => localStorage.getItem('userRole'), []);

  return role === 'ROLE_CAREGIVER' ? <HomeCareWorker /> : <HomeSocialWorker />;
};
export const sampleMainList: IGetMainList = {
  totalPages: 4,
  totalElements: 11,
  size: 3,
  content: [
    {
      contactId: 11,
      center: '함께해요재가센터',
      title: '[평일/주말] 방문 요양 - 4등급 여자 어르신',
      createdAt: '2024-08-12T16:10:41.494927',
      wage: 13000,
      negotiable: true,
      bookmarked: true,
      meal: true,
      toileting: true,
      mobility: true,
      daily: true,
    },
    {
      contactId: 10,
      center: '함께해요재가센터',
      title: '[주말] 병원 동행 - 4등급 남자 어르신',
      createdAt: '2024-08-12T16:10:41.494927',
      wage: 13000,
      negotiable: false,
      bookmarked: true,
      meal: true,
      toileting: true,
      mobility: true,
      daily: true,
    },
    {
      contactId: 9,
      center: '함께해요재가센터',
      title: '[평일/주말] 방문 요양 - 4등급 여자 어르신',
      createdAt: '2024-08-12T16:10:41.494927',
      wage: 13000,
      negotiable: true,
      bookmarked: true,
      meal: true,
      toileting: true,
      mobility: true,
      daily: true,
    },
  ],
  first: true,
  last: false,
};
