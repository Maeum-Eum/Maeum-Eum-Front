import { useNavigate } from 'react-router-dom';
import { useInboxStore } from '../../store/inboxStore';
import { useState } from 'react';
import { PeopleInfoContainer } from '../home/PeopleInfoContainer';
import { HomeButtons } from '../home/HomeButtons';
import { Modal } from '../Modal';
import { postRejectMatching } from '../../services/contact';
import styled from 'styled-components';
import { BlankPage } from '../BlankPage';

export const CareGiverInBox = () => {
  const { data, index } = useInboxStore();
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  if (data === null) return <></>;
  if (data.content.length === 0)
    return <BlankPage text={'아직 연락이 없어요'} />;

  return (
    <Wrapper>
      {data.content.map((item) => (
        <Container>
          <PeopleInfoContainer
            elderId={null}
            contactId={index === 1 ? null : item.contactId}
            isCare={true}
            title={item.title}
            createdAt={item.createdAt}
            wage={item.wage}
            negotiable={item.negotiable}
            center={item.center}
            tags={[item.daily, item.mobility, item.meal, item.toileting]}
          />
          {index === 0 ? (
            <HomeButtons
              leftFunc={() => {
                setModalOpen(true);
              }}
              leftText="거절하기"
              rightFunc={() => {
                navigate(`/accept/${item.contactId}`);
              }}
              rightText="수락하기"
            />
          ) : (
            <Button
              onClick={() => {
                if (localStorage.getItem('userRole') === 'ROLE_MANAGER') {
                  navigate('/detail/care/1?done=true');
                } else {
                  navigate(`/detail/elder/contact/${item.contactId}?done=true`);
                }
              }}
            >
              자세히 보기
            </Button>
          )}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            title={item.title}
            content="거절할 경우<br/>영구적으로 삭제됩니다. <br/>그래도 거절하시겠습니까?"
            left="취소"
            right="확인"
            onConfirm={async () => {
              await postRejectMatching(item.contactId);
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
