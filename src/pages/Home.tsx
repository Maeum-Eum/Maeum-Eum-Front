import styled from 'styled-components';
import { HomeHeader } from '../components/home/homeHeader';
import { HomeDropdown } from '../components/home/HomeDropdown';
import { NavigationBar } from '../components/home/NavigationBar';

export const Home = () => {
  return (
    <Wrapper>
      <Dropdowns>
        <HomeDropdown items={['도보 20분 이내', '도보 10분 이내']} />

        <HomeDropdown items={['최신순', '가능 업무 일자순']} />
      </Dropdowns>
      <Content></Content>
    </Wrapper>
  );
};

const Content = styled.div`
  flex-grow: 1;
`;

const Wrapper = styled.div`
  min-height: 100dvh;
  display: flex;

  flex-direction: column;

  width: 100%;
`;

const Dropdowns = styled.div`
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
