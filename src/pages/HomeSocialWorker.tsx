import styled from 'styled-components';
import { HomeButtons } from '../components/home/HomeButtons';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getElderList, getManagerHome, IManagerMain } from '../services/home';
import { useHomeOptionStoreStore } from '../store/homeOptionStore';
import { useManagerHomeStore } from '../store/managerHomeStore';
import { PeopleInfoContainer } from '../components/home/PeopleInfoContainer';
import { deleteCareBookmark, postCareBookmark } from '../services/contact';

export const HomeSocialWorker = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setData, data, toggleBookmark, setElderList } = useManagerHomeStore();
  const { order, distance, elderName } = useHomeOptionStoreStore();

  const sampleManagerMain: IManagerMain[] = [
    {
      caregiverId: 1,
      caregiverName: '요양보호사1',
      resumeId: 1,
      title: '[월/수/금] 오전/오후 - 식사 배변 이동 일상',
      negotiable: true,
      wage: 13000,
      possibleTasks: ['방문 요양', '방문 목욕', '병원 동행'],
      isBookmarks: true,
      bookmarkId: 1,
      createAt: '2024-10-12T08:02:21.347+0000',
    },
    {
      caregiverId: 2,
      caregiverName: '요양보호사2',
      resumeId: 2,
      negotiable: false,
      title: '[월/수/금] 오전/오후 - 식사 배변 이동 일상',
      wage: 15000,
      possibleTasks: ['방문 요양', '방문 목욕', '병원 동행'],
      isBookmarks: false,
      bookmarkId: null,
      createAt: '2024-10-18T08:02:21.347+0000',
    },
  ];
  useEffect(() => {
    const getHome = async () => {
      setLoading(true);
      try {
        const res = await getManagerHome({
          distance: distance,
          sort: order,
          name: elderName,
        });
        setData(res);
        const elders = await getElderList();
        setElderList(elders);
      } catch (error) {
        setData(sampleManagerMain);
        console.error('데이터 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    getHome();
  }, []);
  if (loading) return <></>;
  return (
    <Wrapper>
      {data?.map((item) => (
        <ContentWrapper>
          {
            <PeopleInfoContainer
              contactId={null}
              isCare={false}
              title={item.title}
              createdAt={item.createAt}
              wage={item.wage}
              negotiable={item.negotiable}
              center=""
              tags={[]}
              elderId={null}
              positions={item.possibleTasks}
            />
          }
          <HomeButtons
            leftFunc={async () => {
              toggleBookmark(item.caregiverId);

              if (item.bookmarkId) {
                await deleteCareBookmark(item.bookmarkId);
              } else {
                await postCareBookmark(item.caregiverId, item.caregiverId); //TODO: elder id로 변경
              }
            }}
            rightFunc={() => {
              navigate(`/detail/care/${item.caregiverId}`);
            }}
            leftText="저장"
            rightText="자세히 보기"
          />
        </ContentWrapper>
      ))}
    </Wrapper>
  );
};
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.5rem;
`;

export const Dropdowns = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  position: sticky;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 3.5rem;
  gap: 0;
  max-width: 440px;
  width: 100%;
  z-index: 1000;
  border: 0.1rem solid ${(props) => props.theme.colors.black10};
`;
