import { ReactNode } from 'react';
import styled from 'styled-components';
import { FindAccountHeader } from './FindAccountHeader';
import { FindAccountTab } from './FindAccountTab';
import { FindAccountFooter } from './FindAccountFooter';

interface FindAccountLayoutProps {
  children: ReactNode;
  func: () => void;
  tab?: ReactNode;
  step: number;
  activeTab: 'id' | 'password';
}

export const FindAccountLayout = ({
  children,
  func,
  activeTab,
}: FindAccountLayoutProps) => {
  return (
    <>
      <Wrapper>
        <FindAccountHeader />
        <FindAccountTab />
        <Content>{children}</Content>
      </Wrapper>
      <FindAccountFooter activeTab={activeTab} nextStep={func} />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 0 3rem;
  box-sizing: border-box;
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 7rem;

`;
