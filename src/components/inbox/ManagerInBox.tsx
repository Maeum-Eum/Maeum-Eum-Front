import { useState } from 'react';
import { useInboxStore } from '../../store/inboxStore';

import { BottomPopup } from '../BottomPopup';
import { IoIosArrowDown } from 'react-icons/io';
import { PeopleInfoContainer } from '../home/PeopleInfoContainer';
import { HomeButtons } from '../home/HomeButtons';
import { Modal } from '../Modal';
import styled from 'styled-components';

export const ManagerInBox = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const options = ['홍길동 어르신', '이순자 어르신'];
  const [person, setPerson] = useState(options[0]);
  const { index, managerData } = useInboxStore();
  const [isModalOpen, setModalOpen] = useState(false);

  if (!managerData) return;

  return (
    <Wrapper>
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
      <ContentWrapper>
        {managerData.map((item) => (
          <Container>
            <PeopleInfoContainer
              elderId={null}
              contactId={index === 1 ? null : item.applyId} //TODO 처리
              isCare={false}
              title={item.title}
              createdAt={item.createdAt}
              wage={10000} //TODO 수정
              negotiable={item.negotiable}
              center={item.centerName}
              tags={[]}
              positions={item.satisfyTasks}
            />
            {index === 0 ? (
              <HomeButtons
                leftFunc={() => {
                  setModalOpen(true);
                }}
                leftText="거절하기"
                rightFunc={() => {
                  //   navigate(`/accept/${item.contactId}`); //TODO 수락하기
                }}
                rightText="수락하기"
              />
            ) : (
              <Button
                onClick={() => {
                  if (localStorage.getItem('userRole') === 'ROLE_MANAGER') {
                    // navigate(`/detail/care/${managerData.}?done=true`);
                  } else {
                    // navigate(`/detail/elder/contact/${item.contactId}?done=true`); //TODO 수정
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
                //TODO 거절 함수 넣기
                setModalOpen(false);
              }}
            />
          </Container>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 2.5rem 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentWrapper = styled.div``;
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
