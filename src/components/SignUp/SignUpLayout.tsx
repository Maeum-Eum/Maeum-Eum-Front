import styled from 'styled-components';
import { SignUpHeader } from './SignUpHeader';
import { ReactNode } from 'react';
//import { SignUpFooter } from './ButtonFooter';

interface SignUpLayoutProps {
  children: ReactNode;
  title: string;
}

export const SignUpLayout = ({ title, children }: SignUpLayoutProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <Line />
        {children}
      </Content>
    </Wrapper>
  );
};
const Content = styled.div`
  padding: 0 3rem;
  box-sizing: border-box;
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 7rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  overflow: hidden;
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black10};
  padding-bottom: 2rem;
`;
const Title = styled.span`
  margin-left: 3rem;
  ${({ theme }) => theme.fontStyles.bodyMediumR};
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
