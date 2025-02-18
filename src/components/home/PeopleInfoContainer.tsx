import styled from 'styled-components';

interface IPeopleInfoContainer {
  isCare: boolean;
  border?: boolean;
}

export const PeopleInfoContainer = ({
  isCare,
  border = true,
}: IPeopleInfoContainer) => {
  return (
    <Wrapper $border={border}>
      <SubInfo>
        {isCare ? '함께해요재가 센터 - 방금' : '2025-02-01 등록'}
        {isCare ? null : <img src="public/icons/certificate.svg" />}
      </SubInfo>

      <Info>[평일/주말] 방문 요양 - 4등급 여자 어르신</Info>
      <Wage>
        <span>시급 13,000원</span>
        <span>(협의가능)</span>
      </Wage>
      <Tags>
        <Tag>방문</Tag>
      </Tags>
    </Wrapper>
  );
};

export const RoundedPeopleInfo = ({ isCare }: IPeopleInfoContainer) => {
  return (
    <RoundedWrapper>
      <SubInfo>
        {isCare ? '함께해요재가 센터 - 방금' : '2025-02-01 등록'}
        {isCare ? null : <img src="public/icons/certificate.svg" />}
      </SubInfo>

      <Info>[평일/주말] 방문 요양 - 4등급 여자 어르신</Info>
      <Wage>
        <span>시급 13,000원</span>
        <span>(협의가능)</span>
      </Wage>
      <Tags>
        <Tag>방문</Tag>
      </Tags>
    </RoundedWrapper>
  );
};
const RoundedWrapper = styled.div`
  padding: 1.1rem 1.5rem;
  border: 0.05rem solid ${({ theme }) => theme.colors.black10};
  border-radius: 1.5rem;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div<{ $border: boolean }>`
  padding-left: ${({ $border }) => ($border ? '2rem' : '0')};

  border-left: ${({ $border, theme }) =>
    $border ? `0.5rem solid ${theme.colors.mainColor}` : 'none'};
`;

const SubInfo = styled.div`
  ${({ theme }) => theme.fontStyles.bodyMediumR}
  color: ${({ theme }) => theme.colors.black40};
  margin-bottom: 1rem;
  display: inline-flex;
  align-items: center;
  img {
    width: 1.3rem;
    height: 1.6rem;
    margin-left: 0.5rem;
  }
`;
const Info = styled.div`
  ${({ theme }) => theme.fontStyles.head2B}
`;

const Wage = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.black10};
  ${({ theme }) => theme.fontStyles.head2B}
  color:${({ theme }) => theme.colors.mainColor};
  :last-child {
    ${({ theme }) => theme.fontStyles.bodyMediumR}
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.colors.black40};
  }
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
`;
const Tag = styled.div`
  padding: 0.6rem 0.8rem;
  background-color: rgba(55, 31, 240, 0.15);
  border-radius: 1.3rem;
  text-align: center;
  ${({ theme }) => theme.fontStyles.bodyMediumR}
  color:${({ theme }) => theme.colors.black80};
`;
