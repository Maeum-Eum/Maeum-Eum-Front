import { ReactNode } from 'react';
import styled from 'styled-components';

interface ElderRegisterProps {
  children: ReactNode;
  title: string;
  require: boolean;
}

export const ElderRegisterLayout = ({
  title,
  children,
  require,
}: ElderRegisterProps) => {
  return (
    <Wrapper>
      <Title $require={require}>
        {title} <span>{require ? '(필수)' : '(선택)'}</span>
      </Title>
      <Content>
        <Line />
        {children}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 0 3rem;
  box-sizing: border-box;
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 7rem;
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black10};
  padding-bottom: 2rem;
`;
const Title = styled.span<{ $require: boolean }>`
  margin-left: 3rem;
  ${({ theme }) => theme.fontStyles.bodyMediumR};
  span {
    color: ${({ theme, $require }) =>
      $require ? theme.colors.sColor4 : theme.colors.sColor3};
  }
`;
