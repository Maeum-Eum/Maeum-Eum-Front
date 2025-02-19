import styled from 'styled-components';

import { useEffect, useState } from 'react';
import {
  getDetailRecommendCaregiver,
  ICareGiverDetailInfo,
} from '../services/detail';
import { useParams } from 'react-router-dom';
import { RoundedPeopleInfo } from '../components/home/PeopleInfoContainer';

const sampleData: ICareGiverDetailInfo = {
  caregiverId: 2,
  resumeId: 5,
  title: '[월/수/금] 방문요양 - 인지자극 활동 가능',
  jobPosition: ['방문요양', '입주요양', '요양원'],
  certificateCode: '2024-9876543',
  hasDementiaTraining: 'COMPLETE',
  hasVehicle: false,
  workPlace: ['WALK_20_MIN', 'WITHIN_3KM'],
  workDay: ['월', '수', '금'],
  workTimeSlot: ['MORNING', 'EVENING'],
  isNegotiableTime: false,

  wage: 14000,
  elderRank: [2, 4],
  meal: ['식사 도움'],
  toileting: ['화장실 이용하기'],
  mobility: ['이동 도움'],
  daily: ['목욕보조', '병원동행', '인지자극 활동'],
  preferredGender: 'FEMALE',
  isFamilyPreferred: false,
  isPetPreferred: true,
  experience: [
    {
      startDate: '2018-06-15',
      endDate: '2021-09-30',
      centerId: '3',
      work: '요양원',
      center: '행복한 요양원',
    },
    {
      startDate: '2022-01-10',
      endDate: '2023-05-20',
      centerId: '4',
      work: '방문요양',
      center: '서울방문요양센터',
    },
  ],
  introduction: '어르신을 가족처럼 생각하며 성심껏 돌보겠습니다.',
  profileImage:
    'https://mvp-imagebucket.s3.ap-northeast-2.amazonaws.com/sample-profile-2.jpg',
};
export const DetailCareInfo = () => {
  const [loading, setLoading] = useState(false);
  const { careGiverId } = useParams();
  const [data, setData] = useState<ICareGiverDetailInfo>();
  useEffect(() => {
    const getDetail = async () => {
      setLoading(true);
      try {
        const res = await getDetailRecommendCaregiver(careGiverId ?? '');
        setData(res);
      } catch (error) {
        console.error('데이터 로드 실패:', error);
        setData(sampleData);
      } finally {
        setLoading(false);
      }
    };
    getDetail();
  }, []);
  if (loading) return <></>;

  return (
    data && (
      <Wrapper>
        <RoundedPeopleInfo
          contactId={null}
          elderId={null}
          tags={[true, true, true]}
          isCare={true}
          title={data.title}
          center=""
          wage={data.wage}
          positions={data.jobPosition}
          negotiable={data.isNegotiableTime}
        />
        <Content>
          <InfoTitle>근무 일정</InfoTitle>
          <Info>
            {data.workDay}
            {data.workTimeSlot}
          </Info>
          <InfoTitle>요양보호사 정보</InfoTitle>
          <Info>
            <span>치매교육 이수</span>
            <span>{data.hasDementiaTraining === 'COMPLETE' ? 'O' : 'X'}</span>
            <span>자차여부</span>
            <span>{data.hasVehicle ? 'O' : 'X'}</span>
            <span>
              만날 수 있는 <br />
              어르신 등급
            </span>
            <InlineInfo>
              {data.elderRank.map((e) => (
                <span>{e}등급</span>
              ))}
            </InlineInfo>
          </Info>
          <InfoTitle>가능한 업무</InfoTitle>
          <Info>
            <span>식사 보조</span>
            <InlineInfo>
              {data.meal.map((e) => (
                <span>{e}</span>
              ))}
            </InlineInfo>
            <span>배변 보조</span>
            <InlineInfo>
              {data.toileting.map((e) => (
                <span>{e}</span>
              ))}
            </InlineInfo>
            <span>이동 보조</span>
            <InlineInfo>
              {data.mobility.map((e) => (
                <span>{e}</span>
              ))}
            </InlineInfo>
            <span>일상 생활</span>
            <InlineInfo>
              {data.daily.map((e) => (
                <span>{e}</span>
              ))}
            </InlineInfo>
          </Info>
          <InfoTitle>참고사항</InfoTitle>
          <Info>
            <span>가족 선호</span>
            <span>{data.isFamilyPreferred ? 'O' : 'X'}</span>
            <span>반려동물 선호</span>
            <span>{data.isPetPreferred ? 'O' : 'X'}</span>
          </Info>
          <InfoTitle>경력 사항</InfoTitle>
          <div>
            <span>
              {data.experience.map((e) => (
                <Experience>
                  <span>
                    {e.center}({e.work})
                  </span>
                  <span>
                    {e.startDate} - {e.endDate}
                  </span>
                </Experience>
              ))}
            </span>
          </div>
        </Content>
      </Wrapper>
    )
  );
};

const Experience = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2.5fr;
  gap: 3rem;
  :first-child {
    margin-bottom: 1rem;
  }
`;
const Wrapper = styled.div`
  border-top: 0.1rem solid ${({ theme }) => theme.colors.black10};
  padding: 2rem 1.7rem;

  ${({ theme }) => theme.fontStyles.head2M};
`;

const Content = styled.div`
  padding: 0 1.4rem;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 1.5rem;
`;
const InfoTitle = styled.span`
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  ${({ theme }) => theme.fontStyles.large2SB};
`;
const InlineInfo = styled.span`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.5rem;

  row-gap: 0.5rem;
`;
