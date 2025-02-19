import styled from 'styled-components';
import { RoundedPeopleInfo } from '../components/home/PeopleInfoContainer';
import { HomeButtons } from '../components/home/HomeButtons';
import { sampleMainList } from '../components/home/DynamicHome';
import { postElderBookmark } from '../services/contact';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { INearElderList } from '../services/home';

export const NearElder = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<INearElderList>();
  //TODO 샘플데이터
  const sampleNearElderList: INearElderList = {
    meal: {
      elderId: 1,
      center: '서울 요양 센터',
      title: '[평일/주말] - 4등급 남자 어르신',
      wage: 13000,
      negotiable: true,
      meal: true, // 관련 업무 가능 여부
      toileting: true,
      mobility: false,
      daily: false,
    },
    toileting: {
      elderId: 2,
      center: '행복한 요양원',
      title: '[평일] - 3등급 여자 어르신',
      wage: 12500,
      negotiable: false,
      meal: false,
      toileting: true, // 관련 업무 가능 여부
      mobility: true,
      daily: true,
    },
    wage: {
      elderId: 3,
      center: '푸른 요양 보호 센터',
      title: '[주말] - 5등급 남자 어르신',
      wage: 14000,
      negotiable: true,
      meal: false,
      toileting: false,
      mobility: true,
      daily: true, // 관련 업무 가능 여부
    },
  };
  useEffect(() => {
    setLoading(true);
    // getNearElder(range)
    //   .then((response) => {
    //     setData(response);
    //   })
    //   .catch(() => {

    //   });
    setData(sampleNearElderList);
    setLoading(false);
  }, []);
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
            contactId={0} //TODO 삭제
          />
          <HomeButtons
            leftFunc={async () => {
              await postElderBookmark(sampleMainList.content[0].contactId);
            }}
            rightFunc={() => {
              navigate(`/apply/${sampleMainList.content[0].contactId}`);
            }}
            leftText="저장"
            rightText="지원하기"
            bookmark={sampleMainList.content[0].bookmarked}
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
            contactId={0} //TODO 삭제
          />
          <HomeButtons
            leftFunc={async () => {
              await postElderBookmark(sampleMainList.content[0].contactId);
            }}
            rightFunc={() => {}}
            leftText="저장"
            rightText="지원하기"
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
            contactId={0} //TODO 삭제
          />
          <HomeButtons
            leftFunc={async () => {
              await postElderBookmark(sampleMainList.content[0].contactId);
            }}
            rightFunc={() => {}}
            leftText="저장"
            rightText="지원하기"
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
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  &:nth-child(even) ${Title} {
    border-left-color: rgba(88, 103, 215, 1);
  }
`;
