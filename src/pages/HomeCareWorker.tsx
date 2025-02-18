import styled from 'styled-components';
import { PeopleInfoContainer } from '../components/home/PeopleInfoContainer';
import { HomeButtons } from '../components/home/HomeButtons';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Modal } from '../components/Modal';

export const HomeCareWorker = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Wrapper>
      <ContentWrapper>
        <PeopleInfoContainer isCare={true} />
        <HomeButtons
          leftFunc={() => {
            setModalOpen(true);
          }}
          rightFunc={() => navigate('/detail/elder/1')}
          leftText="거절하기"
          rightText="자세히 보기"
        />
      </ContentWrapper>
      <ContentWrapper>
        <PeopleInfoContainer isCare={true} />
        <HomeButtons
          leftFunc={() => {}}
          rightFunc={() => {}}
          leftText="거절하기"
          rightText="자세히 보기"
        />
      </ContentWrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="[평일/주말] 방문 요양 - 4등급 여자 어르신"
        content="거절할 경우<br/>영구적으로 삭제됩니다. <br/>그래도 거절하시겠습니까?"
        left="취소"
        right="확인"
        onConfirm={() => {
          //TODO 거절 api 호출
          setModalOpen(false);
        }}
      />
    </Wrapper>
  );
};
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.5rem;
`;

export const Dropdowns = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  position: sticky;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 3.5rem;
  gap: 0;
  max-width: 500px;
  width: 100%;
  z-index: 1000;
  border: 0.1rem solid ${(props) => props.theme.colors.black10};
`;
