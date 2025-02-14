import { ReactNode } from 'react';
import styled from 'styled-components';

interface HomeHeaderProps {
  child: ReactNode;
}

export const HomeHeader = ({ child }: HomeHeaderProps) => {
  return <Wrapper>{child}</Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 11.2rem;
  max-width: 500px;
  ${(props) => props.theme.fontStyles.headingSB};
  display: flex;
  align-items: center;
  justify-items: center;
  :only-child {
    width: 100%;
    text-align: center;
  }
`;
