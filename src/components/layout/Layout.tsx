import { ReactNode } from 'react';

import styled from 'styled-components';

interface LayoutProps {
  isMobile: boolean;
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

interface WrapperProps {
  isMobile: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  min-width: 320px; //모바일 크기

  width: 100%;
  margin: 0 auto;
  max-height: 100dvh;
  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;

  @media (min-width: 440px) {
    //태블릿 사이즈
    max-width: 440px;
  }

  @media (min-width: 1024px) {
    //데스크탑 사이즈
    max-width: 440px;
  }
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: ${({ isMobile }) =>
    isMobile ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.1)'};
`;

export const Layout = ({ children, isMobile, header, footer }: LayoutProps) => {
  return (
    <OuterWrapper>
      <Wrapper isMobile={isMobile}>
        {header && <HeaderContainer>{header}</HeaderContainer>}
        <ContentContainer>{children}</ContentContainer>
        {footer && <FooterContainer>{footer}</FooterContainer>}
      </Wrapper>
    </OuterWrapper>
  );
};
const ContentContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 2rem;
`;
const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1000;
`;

const FooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.background};
`;
const OuterWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    background: url('public/icons/background.svg') no-repeat center;
    background-size: cover;
  }
`;
