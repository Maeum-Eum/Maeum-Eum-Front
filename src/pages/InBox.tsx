import { useMemo } from 'react';
import { ManagerInBox } from '../components/inbox/ManagerInBox';
import { CareGiverInBox } from '../components/inbox/CareGiverInBox';

export const InBox = () => {
  const role = useMemo(() => localStorage.getItem('userRole'), []);

  return role === 'ROLE_CAREGIVER' ? <CareGiverInBox /> : <ManagerInBox />;
};
