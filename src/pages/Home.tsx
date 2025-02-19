import styled from 'styled-components';
import { Outlet } from 'react-router';
import { useEffect, useState } from 'react';
import { getMainList } from '../services/home';
import { useCareGiverHomeStore } from '../store/careGiverHomeStore';
import { useHomeOptionStoreStore } from '../store/homeOptionStore';
import { Modal } from '../components/Modal';
import { AccessPermissionPopup } from '../components/BottomPopup';

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const { setData } = useCareGiverHomeStore();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { range, order, modal, setModal } = useHomeOptionStoreStore();
  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (localStorage.getItem('permission') !== 'true') setPopupOpen(true);
    if (role === 'ROLE_CAREGIVER') {
      setLoading(true);
      getMainList({ range: range, sort: order, page: '1' })
        .then((response) => {
          setData(response);
        })
        .catch(() => {});
      setLoading(false);
    }
  }, []);
  if (loading) return <></>;
  return (
    <Wrapper>
      <Content>
        <Outlet />
      </Content>
      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        content="해당 기능은 현재 제공되지 않으며,<br/> 추후 업데이트될 예정입니다"
        left="취소"
        right="확인"
        onConfirm={async () => {
          setModal(false);
        }}
      />
      <AccessPermissionPopup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        options={['카메라 및 저장공간 접근', '위치 접근']}
        onSelect={(option) => {
          setPopupOpen(false);
          console.log(option);
        }}
      />
    </Wrapper>
  );
};

const Content = styled.div`
  flex-grow: 1;
  padding: 2.5rem 3rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Dropdowns = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  position: sticky;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 3.5rem;
  gap: 0;
  max-width: 440px;
  width: 100%;
  z-index: 1000;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.black10};
`;
