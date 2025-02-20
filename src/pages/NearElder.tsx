import styled from 'styled-components';
import { RoundedPeopleInfo } from '../components/home/PeopleInfoContainer';
import { HomeButtons } from '../components/home/HomeButtons';
import { postElderBookmark } from '../services/contact';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getNearElder, INearElderList } from '../services/home';
import { useHomeOptionStoreStore } from '../store/homeOptionStore';

export const NearElder = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<INearElderList>();
  const { range } = useHomeOptionStoreStore();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getNearElder(range);
        setData(response);
      } catch (error) {
        console.error('데이터 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [range]);
  if (loading) return <></>;

  return (
    <Wrapper>
      {data?.meal && (
        <ContentWrapper>
          <Title>
            요양 보호사님이 가능한 식사보조를 원하는 어르신이 있어요!
          </Title>
          <RoundedPeopleInfo
            isCare={true}
            title={data.meal.title}
            center={data.meal.center}
            wage={data.meal.wage}
            negotiable={data.meal.negotiable}
            tags={[
              data.meal.daily,
              data.meal.mobility,
              data.meal.meal,
              data.meal.toileting,
            ]}
            elderId={data.meal.elderId}
            contactId={null}
          />
          <HomeButtons
            leftFunc={async () => {
              await postElderBookmark(data.meal!.elderId);
            }}
            rightFunc={() => {
              navigate(`/apply/${data.meal!.elderId}`);
            }}
            leftText="저장"
            rightText="지원하기"
            bookmark={data.meal.bookmarked}
          />
        </ContentWrapper>
      )}

      {data?.toileting && (
        <ContentWrapper>
          <Title>
            요양 보호사님이 가능한 배변보조를 원하는 어르신이 있어요!
          </Title>
          <RoundedPeopleInfo
            isCare={true}
            title={data.toileting.title}
            center={data.toileting.center}
            wage={data.toileting.wage}
            negotiable={data.toileting.negotiable}
            tags={[
              data.toileting.daily,
              data.toileting.mobility,
              data.toileting.meal,
              data.toileting.toileting,
            ]}
            elderId={data.toileting.elderId}
            contactId={null}
          />
          <HomeButtons
            leftFunc={async () => {
              await postElderBookmark(data.toileting!.elderId);
            }}
            rightFunc={() => {
              navigate(`/apply/${data.toileting!.elderId}`);
            }}
            leftText="저장"
            rightText="지원하기"
            bookmark={data.toileting.bookmarked}
          />
        </ContentWrapper>
      )}
      {data?.wage && (
        <ContentWrapper>
          <Title>이 근처 가장 시급이 높은 일자리가 있어요!</Title>
          <RoundedPeopleInfo
            isCare={true}
            title={data.wage.title}
            center={data.wage.center}
            wage={data.wage.wage}
            negotiable={data.wage.negotiable}
            tags={[
              data.wage.daily,
              data.wage.mobility,
              data.wage.meal,
              data.wage.toileting,
            ]}
            elderId={data.wage.elderId}
            contactId={null}
          />
          <HomeButtons
            leftFunc={async () => {
              await postElderBookmark(data.wage!.elderId);
            }}
            rightFunc={() => {
              navigate(`/apply/${data.wage!.elderId}`);
            }}
            leftText="저장"
            rightText="지원하기"
            bookmark={data.wage.bookmarked}
          />
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.5rem;
`;

const Title = styled.div`
  ${({ theme }) => theme.fontStyles.headingB}
  padding-left: 1rem;
  border-left: 0.5rem solid rgba(223, 84, 139, 1);
  min-height: 4rem;
  display: flex;
  align-items: center;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 2rem;
  width: 100%;
  &:nth-child(even) ${Title} {
    border-left-color: rgba(88, 103, 215, 1);
  }
`;
