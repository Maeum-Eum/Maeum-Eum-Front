import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps {
  isMobile: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
 @font-face {
    font-family: 'PretendardRegular';
    src: url('/fonts/Pretendard-Regular.woff') format('truetype');
  }
  
  @font-face {
    font-family: 'PretendardMedium';
    src: url('/fonts/Pretendard-Medium.woff') format('truetype');
  }

  @font-face {
    font-family: 'PretendardSemiBold';
    src: url('/fonts/Pretendard-SemiBold.woff') format('truetype');
  }

  @font-face {
    font-family: 'PretendardBold';
    src: url('/fonts/Pretendard-Bold.woff') format('truetype');

  }
  @font-face {
    font-family: 'PretendardLight';
    src: url('/fonts/Pretendard-Light.woff') format('truetype');

  }
html {
  font-size: 62.5%
    
}
  body {
    margin: 0;
    padding: 0;
    font-family: PretendardRegular;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    color:${({ theme }) => theme.colors.black}
  }

  * {
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }

  button, a, input, textarea, select {
    outline: none;
  }

  input[type="text"], select {
    -webkit-appearance: none;
    appearance: none;
  }
  #root {
    width: 100%;
    height: 100%;

 @media (min-width: 1024px) {
    background: url('icons/background.svg') no-repeat center;
    background-size: cover;
  }
  }
  
`;

export default GlobalStyle;
