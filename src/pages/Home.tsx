import styled from 'styled-components';
import { Outlet } from 'react-router';

export const Home = () => {
  return (
    <Wrapper>
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
};

const Content = styled.div`
  flex-grow: 1;
  padding: 2.5rem 3rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
