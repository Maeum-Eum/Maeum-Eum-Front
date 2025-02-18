import { useMemo } from 'react';
import { HomeCareWorker } from '../../pages/HomeCareWorker';
import { HomeSocialWorker } from '../../pages/HomeSocialWorker';

export const DynamicHome = () => {
  const role = useMemo(() => localStorage.getItem('userRole'), []);

  return role === 'ROLE_CAREGIVER' ? <HomeCareWorker /> : <HomeSocialWorker />;
};
