import styled from 'styled-components';
import { PeopleInfoContainer } from '../components/home/PeopleInfoContainer';
import { HomeButtons } from '../components/home/HomeButtons';
import { useInboxStore } from '../store/inboxStore';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { useState } from 'react';
import { postRejectMatching } from '../services/contact';

import { IoIosArrowDown } from 'react-icons/io';
import { BottomPopup } from '../components/BottomPopup';

export const InBox = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const options = ['홍길동 어르신', '이순자 어르신'];
  const [person, setPerson] = useState(options[0]);
  const { data, index } = useInboxStore();
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();
  const role = localStorage.getItem('userRole');

  if (data === null) return <></>;

  return (
    <Wrapper>
      {role === 'ROLE_MANAGER' && (
        <DropDownWrapper>
          <PersonButton onClick={() => setPopupOpen(true)}>
            <span> {person} </span>
            <IoIosArrowDown />
          </PersonButton>
          <BottomPopup
            isOpen={isPopupOpen}
            onClose={() => setPopupOpen(false)}
            options={options}
            onSelect={(option) => {
              setPerson(option);
              setPopupOpen(false);
              console.log(option);
            }}
          />
        </DropDownWrapper>
      )}
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
const DropDownWrapper = styled.div`
  align-self: flex-end;
  display: flex;

  ${(props) => props.theme.fontStyles.head2R};
`;

const PersonButton = styled.button`
  ${(props) => props.theme.fontStyles.head2R};
  text-decoration: underline;
  background-color: transparent;
  display: inline-block;
  border: none;
  cursor: pointer;
  padding-bottom: 1rem;
  :first-child {
    white-space: nowrap;
  }
`;
