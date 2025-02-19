import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PeopleBookmarkContainer } from '../home/PeopleInfoContainer';

import {
  getBookMarkCareGivers,
  IBookMarkCareWorker,
} from '../../services/myPage';
import { useManagerHomeStore } from '../../store/managerHomeStore';
import { DropDownWrapper, PersonButton } from '../inbox/ManagerInBox';
import { IoIosArrowDown } from 'react-icons/io';
import { BottomPopup } from '../BottomPopup';
import { getElderList } from '../../services/home';
import { BlankPage } from '../BlankPage';

export const ManagerBookmark = () => {
  const sampleBookMarkCareWorker: IBookMarkCareWorker[] = [
    {
      bookmarkId: 6,
      caregiverId: 1,
      caregiverName: '홍길동',
      caregiverSupport: ['휠체어 이동보조', '식사 도움', '기저귀 교환'],
      resumeId: 1,
      createdAt: '2025-02-18T21:39:54.159023',
      updatedAt: '2025-02-18T21:39:54.159023',
    },
    {
      bookmarkId: 7,
      caregiverId: 3,
      caregiverName: '테스트2',
      caregiverSupport: ['인지자극 활동', '식사 도움', '간단한 운동'],
      resumeId: 2,
      createdAt: '2025-02-18T21:39:56.582245',
      updatedAt: '2025-02-18T21:39:56.582245',
    },
    {
      bookmarkId: 7,
      caregiverId: 3,
      caregiverName: '테스트2',
      caregiverSupport: ['인지자극 활동', '식사 도움', '간단한 운동'],
      resumeId: 2,
      createdAt: '2025-02-18T21:39:56.582245',
      updatedAt: '2025-02-18T21:39:56.582245',
    },
    {
      bookmarkId: 7,
      caregiverId: 3,
      caregiverName: '테스트2',
      caregiverSupport: ['인지자극 활동', '식사 도움', '간단한 운동'],
      resumeId: 2,
      createdAt: '2025-02-18T21:39:56.582245',
      updatedAt: '2025-02-18T21:39:56.582245',
    },
  ];

  const [data, setData] = useState<IBookMarkCareWorker[]>();
  const [loading, setLoading] = useState(false);
  const [elder, setElder] = useState<string>('');
  const { elderList, setElderList } = useManagerHomeStore();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getHome = async () => {
      setLoading(true);
      try {
        const elders = await getElderList();
        setElderList(elders);
        setElder(elders[0].elderName);
      } catch (error) {
        console.error('데이터 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    getHome();
  }, []);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await getBookMarkCareGivers(elderList[0].elderName);
        setData(res);
      } catch (e) {
        setData(sampleBookMarkCareWorker);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [elder]);

  if (data === undefined || data === null || loading)
    return <BlankPage text="저장한 요양사 목록이 없어요"></BlankPage>;
  return (
    <div>
      <DropDownWrapper>
        <PersonButton onClick={() => setPopupOpen(true)}>
          <span> {elder} </span>
          <IoIosArrowDown />
        </PersonButton>
        <BottomPopup
          isOpen={isPopupOpen}
          onClose={() => setPopupOpen(false)}
          options={elderList.map((item) => item.elderName)}
          onSelect={(option) => {
            setElder(option);
            setPopupOpen(false);
            console.log(option);
          }}
        />
      </DropDownWrapper>
      {data.length === 0 ? (
        <BlankPage text="저장한 요양사 목록이 없어요"></BlankPage>
      ) : (
        <Wrapper>
          {data?.map((item) => (
            <Container>
              <PeopleBookmarkContainer
                isCare={false}
                title={item.caregiverName + ' 요양보호사님'}
                positions={item.caregiverSupport}
              />
              {
                <Button
                  onClick={() => {
                    navigate(`/detail/care/${item.caregiverId}?done=true`);
                  }}
                >
                  자세히 보기
                </Button>
              }
            </Container>
          ))}
        </Wrapper>
      )}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 0rem 3rem;
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
