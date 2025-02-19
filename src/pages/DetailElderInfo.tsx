import styled from 'styled-components';
import { RoundedPeopleInfo } from '../components/home/PeopleInfoContainer';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  getDetailContactElder,
  getDetailNearElder,
  IDetailContactElder,
  IDetailNearElder,
} from '../services/detail';

export const DetailElderInfo = () => {
  const location = useLocation();
  const { contactId, elderId } = useParams();
  const [elderInfo, setElderInfo] = useState<IDetailContactElder>();
  const [nearElderInfo, setNearElderInfo] = useState<IDetailNearElder>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetail = async () => {
      setLoading(true);

      try {
        if (
          location.pathname.startsWith('/detail/elder/contact') &&
          contactId
        ) {
          const res = await getDetailContactElder(Number(contactId));
          setElderInfo(res);
        } else if (location.pathname.startsWith('/detail/elder') && elderId) {
          const res = await getDetailNearElder(Number(elderId));
          setNearElderInfo(res);
        }
      } catch (error) {
        console.error('데이터 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    getDetail();
  }, [contactId, elderId]);
  if (loading) return [];
  return (
    <Wrapper>
      <RoundedPeopleInfo
        contactId={null}
        elderId={null}
        tags={[true, true, true]} //TODO 수정
        isCare={true}
        title={elderInfo?.title ?? nearElderInfo?.title ?? '기본 제목'}
        center={
          elderInfo?.center?.centerName ??
          nearElderInfo?.center?.centerName ??
          '알 수 없음'
        }
        createdAt={
          elderInfo?.createdAt ?? nearElderInfo?.createdAt ?? '날짜 없음'
        }
        wage={elderInfo?.wage ?? nearElderInfo?.wage ?? 0}
        negotiable={elderInfo?.negotiable ?? nearElderInfo?.negotiable ?? false}
      />
      <Content>
        {contactId && (
          <>
            <Title>{elderInfo?.center?.centerName} 관리자 메시지</Title>
            <Message>{elderInfo?.message}</Message>
          </>
        )}
        <InfoTitle>어르신 정보</InfoTitle>
        <Info>
          <span>성별</span>
          <span>
            {elderInfo?.elder.gender ??
              nearElderInfo?.elder.gender ??
              '정보 없음'}
          </span>

          <span>거주지</span>
          <span>
            {elderInfo?.elder.address ??
              nearElderInfo?.elder.address ??
              '정보 없음'}
          </span>

          <span>등급</span>
          <span>
            {elderInfo?.elder.rank ?? nearElderInfo?.elder.rank ?? '정보 없음'}
          </span>

          <span>필요 일정</span>
          <span>{elderInfo?.elder.daily?.join(', ') ?? '정보 없음'}</span>
        </Info>

        <InfoTitle>필요한 서비스</InfoTitle>
        <Info>
          <span>식사 보조</span>
          <InlineInfo>
            {elderInfo?.elder.meal?.map((e) => <span>{e}</span>) ?? '정보 없음'}
          </InlineInfo>

          <span>배변 보조</span>
          <InlineInfo>
            {elderInfo?.elder.toileting?.map((e) => <span>{e}</span>) ??
              '정보 없음'}
          </InlineInfo>

          <span>이동 보조</span>
          <InlineInfo>
            {elderInfo?.elder.mobility?.map((e) => <span>{e}</span>) ??
              '정보 없음'}
          </InlineInfo>
        </Info>

        <InfoTitle>센터 정보</InfoTitle>
        <Info>
          <span>센터명</span>
          <span>
            {elderInfo?.center.centerName ??
              nearElderInfo?.center.centerName ??
              '정보 없음'}
          </span>

          <span>차량보유</span>
          <span>
            {elderInfo?.center.hasCar ?? nearElderInfo?.center.hasCar
              ? '보유'
              : '없음'}
          </span>

          <span>센터 등급</span>
          <span>
            {elderInfo?.center.finalGrade ??
              nearElderInfo?.center.finalGrade ??
              '정보 없음'}
          </span>

          <span>센터 설립 기간</span>
          <span>
            {elderInfo?.center.installationTime ??
              nearElderInfo?.center.installationTime ??
              '정보 없음'}
          </span>
        </Info>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: 0.1rem solid ${({ theme }) => theme.colors.black10};
  padding: 2rem 1.7rem;
`;

const Content = styled.div`
  padding: 0 1.4rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  margin-top: 3.5rem;
  ${({ theme }) => theme.fontStyles.large2B};
`;

const Message = styled.div`
  padding: 2rem 0;
  ${({ theme }) => theme.fontStyles.head2R};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black10};
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 1.5rem;

  ${({ theme }) => theme.fontStyles.head2R};
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
