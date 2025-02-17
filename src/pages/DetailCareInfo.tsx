import styled from 'styled-components';
import { RoundedPeopleInfo } from '../components/home/PeopleInfoContainer';

export const DetailCareInfo = () => {
  return (
    <Wrapper>
      <RoundedPeopleInfo isCare={true} />
      <Content>
        <InfoTitle>근무 일정</InfoTitle>
        <Info></Info>
        <InfoTitle>요양보호사 정보</InfoTitle>
        <Info>
          <span>치매교육 이수</span>
          <span>자차여부</span>
          <span>만날 수 있는 어르신 등급</span>
        </Info>
        <InfoTitle>가능한 업무</InfoTitle>
        <Info>
          <span>식사 보조</span>
          <span>배변 보조</span>
          <span>아동 보조</span>
        </Info>
        <InfoTitle>참고사항</InfoTitle>
        <Info>
          <span>반려동물</span>
          <span>가족</span>
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

const Info = styled.div`
  padding-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  ${({ theme }) => theme.fontStyles.head2R};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black10};
  &:last-child {
    border-bottom: none;
  }
`;
const InfoTitle = styled.span`
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  ${({ theme }) => theme.fontStyles.large2SB};
`;
