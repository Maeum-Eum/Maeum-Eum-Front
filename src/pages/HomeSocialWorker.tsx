import styled from 'styled-components';
import { HomeButtons } from '../components/home/HomeButtons';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getElderList, getManagerHome } from '../services/home';
import { useHomeOptionStoreStore } from '../store/homeOptionStore';
import { useManagerHomeStore } from '../store/managerHomeStore';
import { PeopleInfoContainer } from '../components/home/PeopleInfoContainer';
import { deleteCareBookmark, postCareBookmark } from '../services/contact';
import { BlankPage } from '../components/BlankPage';

export const HomeSocialWorker = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setData, data, toggleBookmark, setElderList, elderId, setElderId } =
    useManagerHomeStore();
  const { order, distance, elderName, setElderName, rangeText, role } =
    useHomeOptionStoreStore();

  useEffect(() => {
    if (!role) return;
    const getHome = async () => {
      setLoading(true);
      try {
        const elders = await getElderList();
        setElderList(elders);
        setElderName(elders[0].elderName);
        setElderId(elders[0].elderId);
      } catch (error) {
        console.error('데이터 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    getHome();
  }, [role]);

  useEffect(() => {
    if (!role) return;
    if (!elderName) return;

    const fetchData = async () => {
      try {
        const res = await getManagerHome({
          distance: distance,
          sort: rangeText,
          name: elderName,
        });
        setData(res);
      } catch (error) {
        console.error('데이터 로드 실패:', error);
      }
    };

    fetchData();
  }, [elderName, distance, order, role]);
  if (loading) return <></>;
  if (data === undefined || data === null)
    return <BlankPage text="조건에 맞는 요양보호사가 없어요"></BlankPage>;
  return (
    <Wrapper>
      {data?.map((item) => (
        <ContentWrapper>
          {
            <PeopleInfoContainer
              contactId={null}
              isCare={false}
              title={item.title}
              createdAt={item.createdAt}
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
                await postCareBookmark(elderId, item.caregiverId);
              }
            }}
            rightFunc={() => {
              navigate(`/detail/care/${item.caregiverId}`);
            }}
            leftText="저장"
            rightText="자세히 보기"
            bookmark={item.isBookmarks}
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
