import styled from 'styled-components';
import { HomeButtons } from '../components/home/HomeButtons';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getMainList } from '../services/home';
import { useCareGiverHomeStore } from '../store/careGiverHomeStore';
import { useHomeOptionStoreStore } from '../store/homeOptionStore';

export const HomeSocialWorker = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setData } = useCareGiverHomeStore();
  const { range, order } = useHomeOptionStoreStore();
  //TODO 함수 바꾸기
  useEffect(() => {
    const getHome = async () => {
      setLoading(true);
      try {
        const res = await getMainList({ range: range, sort: order, page: '1' });
        setData(res);
      } catch (error) {
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
      <ContentWrapper>
        {/* <PeopleInfoContainer isCare={true} /> */}
        <HomeButtons
          leftFunc={async () => {
            //TODO
            //await postCareBookmark()
          }}
          rightFunc={() => {
            navigate('/detail/care/1');
          }}
          leftText="저장"
          rightText="자세히 보기"
        />
      </ContentWrapper>
      <ContentWrapper>
        {/* <PeopleInfoContainer isCare={false} /> */}
        <HomeButtons
          leftFunc={() => {}}
          rightFunc={() => {}}
          leftText="저장"
          rightText="자세히 보기"
        />
      </ContentWrapper>
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
