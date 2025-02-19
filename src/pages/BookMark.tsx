import { CareGiverBookmark } from '../components/bookmark/CareGiverBookmark';
import { ManagerBookmark } from '../components/bookmark/ManagerBookmark';

export const BookMark = () => {
  const role = localStorage.getItem('userRole');
  if (role === 'ROLE_MANAGER') {
    return ManagerBookmark();
  } else {
    return CareGiverBookmark();
  }
};
