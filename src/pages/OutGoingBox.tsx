import styled from 'styled-components';
import { PeopleInfoContainer } from '../components/home/PeopleInfoContainer';
import { HomeButtons } from '../components/home/HomeButtons';
import { Modal } from '../components/Modal';
import { useNavigate } from 'react-router-dom';
import { useInboxStore } from '../store/inboxStore';
import { useState } from 'react';

export const OutGoingBox = () => {
  const { data, index } = useInboxStore();
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  if (data === null) return <></>;
  return (
    <Wrapper>
      {data.content.map((item) => (
        <Container>
          <PeopleInfoContainer
            isCare={true}
            title={item.title}
            createdAt={item.createdAt}
            wage={item.wage}
            negotiable={item.negotiable}
            center={item.center}
            tags={[item.daily, item.mobility, item.meal, item.toileting]}
            contactId={item.contactId}
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
                if (localStorage.getItem('userRole') === 'ROLE_MANAGER') {
                  navigate('/detail/care/1?done=true');
                } else {
                  navigate('/detail/elder/contact/1?done=true');
                }
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
              //TODO: 지원취소하기
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
