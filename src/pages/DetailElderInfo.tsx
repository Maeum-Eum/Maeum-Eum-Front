import styled from 'styled-components';
import { RoundedPeopleInfo } from '../components/home/PeopleInfoContainer';

export const DetailElderInfo = () => {
  return (
    <Wrapper>
      <RoundedPeopleInfo isCare={true} />
      <Content>
        <Title>(함께해요재가센터) 관리자 메시지</Title>
        <Message>
          돌봄 시간 중 가족이 있지만, 다른 조건이 마음에 들어서 연락드립니다.
        </Message>
        <InfoTitle>어르신 정보</InfoTitle>
        <Info>
          <span>성별</span>
          <span>생년월일</span>
          <span>거주지</span>
          <span>등급</span>
          <span>필요 일정</span>
        </Info>
        <InfoTitle>필요한 서비스</InfoTitle>
        <Info>
          <span>식사 보조</span>
          <span>배변 보조</span>
          <span>아동 보조</span>
        </Info>
        <InfoTitle>센터 정보</InfoTitle>
        <Info>
          <span>센터명</span>
          <span>차량보유</span>
          <span>센터 등급</span>
          <span>센터 설립 기간</span>
          <span>한줄 소개</span>
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  ${({ theme }) => theme.fontStyles.head2R};
`;
const InfoTitle = styled.span`
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  ${({ theme }) => theme.fontStyles.large2SB};
`;
