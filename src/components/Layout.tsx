import { ReactNode } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div<WrapperProps>`
  min-width: 320px; //모바일 크기
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    //태블릿 사이즈
    max-width: 500px;
    min-height: 100vh;
    height: 100%;
  }

  @media (min-width: 1024px) {
    //데스크탑 사이즈

    width: 500px;
  }
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${({ isMobile }) => (isMobile ? '0' : '2.5rem')};
  box-shadow: ${({ isMobile }) =>
    isMobile ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.1)'};
  overflow: hidden;
  position: relative;
  align-items: center;
`;

interface LayoutProps {
  isMobile: boolean;
  children: ReactNode;
}

interface WrapperProps {
  isMobile: boolean;
}

//TODO: 로그인 여부에 따른 layout 변경필요
export const Layout = ({ children, isMobile }: LayoutProps) => {
  return <Wrapper isMobile={isMobile}>{children}</Wrapper>;
};
