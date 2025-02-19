import styled from 'styled-components';

import { useState } from 'react';
import { PeopleInfoContainer } from '../home/PeopleInfoContainer';
import { useNavigate } from 'react-router-dom';

import { Modal } from '../Modal';
import { HomeButtons } from '../home/HomeButtons';
import { useOutGoingBoxStore } from '../../store/outGoingBox';

export const CareGiverOutGoingBox = () => {
  const { outGoingData, index } = useOutGoingBoxStore();
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  if (outGoingData === null) return <></>;
  return (
    <Wrapper>
      {outGoingData.content.map((item) => (
        <Container>
          <PeopleInfoContainer
            isCare={true}
            title={item.title}
            wage={item.wage}
            negotiable={item.negotiable}
            center={item.center}
            tags={[item.daily, item.mobility, item.meal, item.toileting]}
            contactId={item.applyId}
            elderId={null}
          />
          {index === 0 ? (
            <HomeButtons
              leftFunc={() => {
                setModalOpen(true);
              }}
              leftText="지원 취소하기"
              rightFunc={() => {
                setModalOpen(true);
              }}
              rightText="한번 더 지원하기"
            />
          ) : (
            <Button
              onClick={() => {
                navigate(`/detail/elder/contact/${item.applyId}?done=true`);
              }}
            >
              자세히 보기
            </Button>
          )}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            content="해당 기능은 현재 제공되지 않으며,<br/> 추후 업데이트될 예정입니다"
            left="취소"
            right="확인"
            onConfirm={async () => {
              setModalOpen(false);
            }}
          />
        </Container>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 2.5rem 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
`;
const Button = styled.button`
  padding: 1rem 0rem;
  box-sizing: border-box;
  border-radius: 1.3rem;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.mainColor};
  ${({ theme }) => theme.fontStyles.headingB}
  color: #ffffff;
`;
