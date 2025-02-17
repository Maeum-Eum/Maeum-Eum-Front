import styled from 'styled-components';
import { RoundedPeopleInfo } from '../components/home/PeopleInfoContainer';
import { HomeButtons } from '../components/home/HomeButtons';

export const NearElder = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title $first={true}>
          이순자 요양 보호사님이 가능한 이동보조를 원하는 어르신이 있어요!
        </Title>
        <RoundedPeopleInfo isCare={true} />
        <HomeButtons
          leftFunc={() => {}}
          rightFunc={() => {}}
          leftText="저장"
          rightText="지원하기"
        />
      </ContentWrapper>
      <ContentWrapper>
        <Title $first={false}>
          이순자 요양 보호사님이 가능한 이동보조를 원하는 어르신이 있어요!
        </Title>
        <RoundedPeopleInfo isCare={true} />
        <HomeButtons
          leftFunc={() => {}}
          rightFunc={() => {}}
          leftText="저장"
          rightText="지원하기"
        />
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.5rem;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Title = styled.div<{ $first: boolean }>`
  ${({ theme }) => theme.fontStyles.headingB}
  padding-left: 1rem;
  border-left: 0.5rem solid
    ${({ $first }) =>
      $first ? 'rgba(223, 84, 139, 1)' : 'rgba(88, 103, 215, 1)'};
`;
