import styled from 'styled-components';
import { UserContainer } from '../components/mypage/UserContainer';
import { useState } from 'react';

import { FaBookmark } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { MyPageRow } from '../components/mypage/MyPageRow';
import { useNavigate } from 'react-router';

export const MyPage = () => {
  const navigate = useNavigate();
  // TODO: 요양보호사/사회복지사 여부에 따라 데이터 바꾸기
  const RotatedSendIcon = styled(IoSend)`
    transform: rotate(180deg);
  `;

  const careWorkerList = [
    {
      icon: <FaBookmark />,
      text: '저장함',
      num: 1,
      onClick: () => {},
    },
    {
      icon: <IoSend />,
      text: '받은 연락함',
      num: 3,
      onClick: () => {
        navigate('/inbox');
      },
    },
    {
      icon: <RotatedSendIcon />,
      text: '보낸 연락함',
      num: 3,
      onClick: () => {
        navigate('/outgoing-box');
      },
    },
  ];

  // const socialList = [
  //   { icon: <FaBookmark />, text: '저장함', num: 1 },
  //   { icon: <IoSend />, text: '연락함', num: 3 },
  // ];
  const [isOn, setIsOn] = useState(true);

  return (
    <Wrapper>
      <UserContainer />
      <JopOpen>
        <Text>{isOn ? '구인 공개' : '구인 비공개'}</Text>
        <ToggleWrapper onClick={() => setIsOn(!isOn)} isOn={isOn}>
          <ToggleSlider isOn={isOn} />
        </ToggleWrapper>
      </JopOpen>
      {careWorkerList.map((li) => MyPageRow(li))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const JopOpen = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 3.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  gap: 0.5rem;
`;

const Text = styled.div`
  background-color: rgba(55, 31, 240, 0.15);
  padding: 0.9rem 0.75rem;
  ${(props) => props.theme.fontStyles.bodyMediumR};
  border-radius: 1.3rem;
`;

const ToggleWrapper = styled.div<{ isOn: boolean }>`
  width: 5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  background-color: ${({ isOn, theme }) =>
    isOn ? theme.colors.mainColor : theme.colors.black20};
  display: flex;
  align-items: center;
  padding: 0.3rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;

const ToggleSlider = styled.div<{ isOn: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOn }) => (isOn ? 'translateX(25px)' : 'translateX(0)')};
`;
