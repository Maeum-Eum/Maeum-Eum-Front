import styled from 'styled-components';

import { CareGiverMyPage } from '../components/mypage/CareGiverMyPage';
import { ManagerMyPage } from '../components/mypage/ManagerMyPage';
import { useEffect, useState } from 'react';

export const MyPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    if (localStorage.getItem('userRole') !== 'ROLE_CAREGIVER') {
      setRole('ROLE_MANAGER');
    } else {
      setRole('ROLE_CAREGIVER');
    }
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Wrapper>
      {role === 'ROLE_CAREGIVER' ? <CareGiverMyPage /> : <ManagerMyPage />}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
