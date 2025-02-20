import styled from 'styled-components';

import { useEffect, useState } from 'react';

import { FaBookmark } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';

import { useNavigate } from 'react-router';
import { IMyPageRow, MyPageRow } from './MyPageRow';
import {
  GetCareGiverMyPage,
  GetProfilePhoto,
  ICareGiverMyPage,
  PostJobOpen,
} from '../../services/myPage';
import { UserContainer } from './UserContainer';

//TODO: API 호출 결과를 대체하기 위한 샘플 데이터
export const sampleCareGiverList: ICareGiverMyPage[] = [
  {
    name: '김철수',
    address: '서울특별시 영등포구 문래동',
    profileImage: 'https://example.com/profile/123.jpg',
    resumeRegistered: true,
    jobOpen: true,
    savedEldersCount: 5,
    managerContactCount: 2,
    applyCount: 6,
  },
  {
    name: '이영희',
    address: '서울특별시 강남구 삼성동',
    profileImage: 'https://example.com/profile/456.jpg',
    resumeRegistered: false,
    jobOpen: false,
    savedEldersCount: 3,
    managerContactCount: 1,
    applyCount: 6,
  },
  {
    name: '박민수',
    address: '부산광역시 해운대구 우동',
    profileImage: 'https://example.com/profile/789.jpg',
    resumeRegistered: true,
    jobOpen: true,
    savedEldersCount: 7,
    managerContactCount: 5,
    applyCount: 1,
  },
  {
    name: '정수진',
    address: '대구광역시 달서구 월성동',
    profileImage: 'https://example.com/profile/101.jpg',
    resumeRegistered: false,
    jobOpen: true,
    savedEldersCount: 2,
    managerContactCount: 3,
    applyCount: 0,
  },
  {
    name: '최준혁',
    address: '인천광역시 연수구 송도동',
    profileImage: 'https://example.com/profile/202.jpg',
    resumeRegistered: true,
    jobOpen: false,
    savedEldersCount: 6,
    managerContactCount: 4,
    applyCount: 3,
  },
];
const RotatedSendIcon = styled(IoSend)`
  transform: rotate(180deg);
`;
export const CareGiverMyPage = () => {
  const navigate = useNavigate();
  const careWorkerList: IMyPageRow[] = [
    {
      icon: <FaBookmark />,
      text: '저장함',
      onClick: () => {
        navigate('/bookmark');
      },
    },
    {
      icon: <IoSend />,
      text: '받은 연락함',
      onClick: () => {
        navigate('/inbox');
      },
    },
    {
      icon: <RotatedSendIcon />,
      text: '보낸 지원함',
      onClick: () => {
        navigate('/outgoing-box');
      },
    },
  ];

  const [loading, setLoading] = useState(false);

  const [myPageInfo, setMyPageInfo] = useState<ICareGiverMyPage>();
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchMyPage = async () => {
      try {
        setLoading(true);
        const response = await GetCareGiverMyPage();

        setMyPageInfo(response);
      } catch (error) {
        setMyPageInfo(sampleCareGiverList[4]);
      } finally {
        setLoading(false);
      }
    };
    fetchMyPage();

    setLoading(false);
  }, []);

  useEffect(() => {
    // myPageInfo 상태가 변경될 때 isOn 값을 설정
    setIsOn(false);
  }, [myPageInfo]);
  if (loading) return <></>;

  return (
    <>
      {myPageInfo && (
        <Wrapper>
          <UserContainer
            name={myPageInfo.name}
            address={myPageInfo.address}
            profileImage={myPageInfo.profileImage ?? ''}
            isResumeRegistered={myPageInfo.resumeRegistered}
          />
          <JopOpen>
            <Text>{isOn ? '구인 공개' : '구인 비공개'}</Text>
            <ToggleWrapper
              onClick={async () => {
                setIsOn(!isOn);
                await PostJobOpen();
              }}
              isOn={isOn}
            >
              <ToggleSlider isOn={isOn} />
            </ToggleWrapper>
          </JopOpen>
          {careWorkerList.map((li, index) =>
            MyPageRow(
              li,
              index === 0
                ? myPageInfo.savedEldersCount
                : index === 1
                ? myPageInfo.managerContactCount
                : myPageInfo.applyCount
            )
          )}
        </Wrapper>
      )}
    </>
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
  background-color: ${(props) => props.theme.colors.background};
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOn }) => (isOn ? 'translateX(25px)' : 'translateX(0)')};
`;
