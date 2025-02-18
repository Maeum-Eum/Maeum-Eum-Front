import styled from 'styled-components';
import { PeopleInfoContainer } from '../components/home/PeopleInfoContainer';
import { HomeButtons } from '../components/home/HomeButtons';

export const InBox = () => {
  return (
    <Wrapper>
      <Container>
        <PeopleInfoContainer isCare={true} border={false} />
        <HomeButtons
          leftFunc={() => {}}
          leftText="거절하기"
          rightFunc={() => {}}
          rightText="수락하기"
        />
      </Container>
      <Container>
        <PeopleInfoContainer isCare={true} border={false} />
        <HomeButtons
          leftFunc={() => {}}
          leftText="거절하기"
          rightFunc={() => {}}
          rightText="수락하기"
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 2.5rem 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
`;
