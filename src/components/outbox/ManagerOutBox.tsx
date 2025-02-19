import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PeopleInfoContainer } from '../home/PeopleInfoContainer';
import { HomeButtons } from '../home/HomeButtons';
import { Modal } from '../Modal';
import { useOutGoingBoxStore } from '../../store/outGoingBox';
import { IManagerSend } from '../../services/myPage';

export const ManagerOutGoingBox = () => {
  const { managerOutGoingDataApproved, managerOutGoingDataPending, index } =
    useOutGoingBoxStore();
  const [data, setData] = useState<IManagerSend[]>();
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (index === 0) {
      setData(managerOutGoingDataPending ?? []);
    } else {
      setData(managerOutGoingDataApproved ?? []);
    }
  }, [managerOutGoingDataApproved, managerOutGoingDataPending, index]);

  if (
    managerOutGoingDataApproved === null ||
    managerOutGoingDataPending === null
  )
    if (data === undefined || data === null) return <></>;
  return (
    <Wrapper>
      {data?.map((item) => (
        <Container>
          <PeopleInfoContainer
            isCare={true}
            title={item.title}
            wage={item.wage}
            negotiable={item.negotiable}
            center={''}
            tags={[]}
            contactId={item.managerContactId}
            positions={item.possibleTasks}
            elderId={null}
          />
          {index === 0 ? (
            <HomeButtons
              leftFunc={() => {
                setModalOpen(true);
              }}
              leftText="연락 취소하기"
              rightFunc={() => {
                setModalOpen(true);
              }}
              rightText="한번 더 연락하기"
            />
          ) : (
            <Button
              onClick={() => {
                navigate(`/detail/care/${item.caregiverId}?done=true`);
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
