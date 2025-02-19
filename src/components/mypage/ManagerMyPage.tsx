import styled from 'styled-components';

import { useEffect, useState } from 'react';

import { FaBookmark } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';

import { useNavigate } from 'react-router';
import { IMyPageRow, MyPageRow } from './MyPageRow';
import { getManagerMyPage, IManagerMypage } from '../../services/myPage';
import { UserContainer } from './UserContainer';

const RotatedSendIcon = styled(IoSend)`
  transform: rotate(180deg);
`;

export const ManagerMyPage = () => {
  const navigate = useNavigate();

  const socialList: IMyPageRow[] = [
    {
      icon: <FaBookmark />,
      text: '저장함',
      onClick: () => {
        navigate('/inbox');
      },
    },
    {
      icon: <IoSend />,
      text: '받은 지원함',
      onClick: () => {
        navigate('/inbox');
      },
    },
    {
      icon: <RotatedSendIcon />,
      text: '보낸 연락함',
      onClick: () => {
        navigate('/outgoing-box');
      },
    },
  ];
  const [loading, setLoading] = useState(false);

  const [myPageInfo, setMyPageInfo] = useState<IManagerMypage>();
  //TODO: API 호출 결과를 대체하기 위한 샘플 데이터
  const sampleManagerProfile: IManagerMypage = {
    managerId: 1,
    name: '사회복지사테스트02',
    phoneNumber: '010-2222-2222',
    centerId: 1,
    centerName: '테스트센터01',
    hasCar: true,
    oneLineIntro: null,
    sentContacts: 0,
    bookmarks: 0,
    applys: 3,
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getManagerMyPage();
        setMyPageInfo(response);
      } catch (error) {
        setMyPageInfo(sampleManagerProfile);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <></>;

  return (
    myPageInfo && (
      <Wrapper>
        <UserContainer
          name={myPageInfo.name}
          address={myPageInfo.centerName}
          profileImage={''} //TODO 프로필 이미지
          centerId={sampleManagerProfile.centerId}
        />

        <>
          {socialList.map((li, index) =>
            MyPageRow(
              li,
              index === 0
                ? myPageInfo.bookmarks
                : index === 1
                ? myPageInfo.applys
                : myPageInfo.sentContacts
            )
          )}
        </>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  gap: 3rem;
  display: flex;
  flex-direction: column;
`;
