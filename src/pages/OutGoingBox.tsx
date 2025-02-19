import { useMemo } from 'react';

import { CareGiverOutGoingBox } from '../components/outbox/CareGiverOutBox';
import { ManagerOutGoingBox } from '../components/outbox/ManagerOutBox';

export const OutGoingBox = () => {
  const role = useMemo(() => localStorage.getItem('userRole'), []);

  return role === 'ROLE_CAREGIVER' ? (
    <CareGiverOutGoingBox />
  ) : (
    <ManagerOutGoingBox />
  );
};
