import styled from 'styled-components';
import { PeopleInfoContainer } from '../components/home/PeopleInfoContainer';
import { HomeButtons } from '../components/home/HomeButtons';
import { useNavigate } from 'react-router';

export const HomeCareWorker = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ContentWrapper>
        <PeopleInfoContainer isCare={true} />
        <HomeButtons
          leftFunc={() => {}}
          rightFunc={() => navigate('/detail/elder/1')}
          leftText="거절하기"
          rightText="자세히 보기"
        />
      </ContentWrapper>
      <ContentWrapper>
        <PeopleInfoContainer isCare={true} />
        <HomeButtons
          leftFunc={() => {}}
          rightFunc={() => {}}
          leftText="거절하기"
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
  max-width: 500px;
  width: 100%;
  z-index: 1000;
  border: 0.1rem solid ${(props) => props.theme.colors.black10};
`;
