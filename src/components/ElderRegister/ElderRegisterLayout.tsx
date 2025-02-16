import { ReactNode } from 'react';
import styled from 'styled-components';

interface ElderRegisterProps {
  children: ReactNode;
  title: string;
}

export const ElderRegisterLayout = ({title, children} : ElderRegisterProps) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Content>
                <Line />
                {children}
            </Content>

        </Wrapper>
    )
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

const Line = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black10};
  padding-bottom: 2rem;
`;
const Title = styled.span`
  margin-left: 3rem;
  ${({ theme }) => theme.fontStyles.bodyMediumR};
`;