import styled from 'styled-components';
import { ReactNode } from 'react';

interface SignUpLayoutProps {
  children: ReactNode;
  title: string;
  require: boolean;
}

export const SignUpLayout = ({
  title,
  children,
  require,
}: SignUpLayoutProps) => {
  return (
    <Wrapper>
      <Title $require={require}>
        {title}
        <span>{require ? '(필수)' : '(선택)'}</span>
      </Title>
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
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black10};
  padding-bottom: 1rem;
`;
const Title = styled.span<{ $require: boolean }>`
  margin-left: 3rem;
  ${({ theme }) => theme.fontStyles.bodyMediumM};
  span {
    color: ${({ theme, $require }) =>
      $require ? theme.colors.sColor4 : theme.colors.sColor3};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ErrorText = styled.div<{ error: boolean }>`
  margin-left: 1.3rem;
  ${({ theme }) => theme.fontStyles.bodySmallL};
  color: ${({ error, theme }) =>
    error ? theme.colors.sColor4 : theme.colors.sColor3};
`;
