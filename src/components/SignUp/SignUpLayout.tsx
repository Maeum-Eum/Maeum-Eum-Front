import styled from 'styled-components';
import { SignUpHeader } from './SignUpHeader';
import { ReactNode } from 'react';
import { SignUpFooter } from './SignUpFooter';

interface SignUpLayoutProps {
  children: ReactNode;
  title: string;
  func: () => void;
}

export const SignUpLayout = ({ title, children, func }: SignUpLayoutProps) => {
  return (
    <>
      <Wrapper>
        <SignUpHeader />
        <Title>{title}</Title>
        <Content>
          <Line />
          {children}
        </Content>
        <SignUpFooter nextStep={func} />
      </Wrapper>
    </>
  );
};
const Content = styled.div`
  padding: 0 3rem;
  box-sizing: border-box;
  flex-grow: 1;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black10};
  padding-bottom: 2rem;
`;
const Title = styled.span`
  margin-left: 3rem;
  margin-top: 1.5rem;
  ${({ theme }) => theme.fontStyles.bodyMediumR};
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
