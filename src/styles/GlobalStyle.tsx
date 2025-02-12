import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps {
  isMobile: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
 @font-face {
    font-family: 'PretendardRegular';
    src: url('/src/assets/fonts/Pretendard-Regular.woff') format('truetype');
  }
  
  @font-face {
    font-family: 'PretendardMedium';
    src: url('/src/assets/fonts/Pretendard-Medium.woff') format('truetype');
  }

  @font-face {
    font-family: 'PretendardSemiBold';
    src: url('/src/assets/fonts/Pretendard-SemiBold.woff') format('truetype');
  }

  @font-face {
    font-family: 'PretendardBold';
    src: url('/src/assets/fonts/Pretendard-Bold.woff') format('truetype');

  }
  @font-face {
    font-family: 'PretendardLight';
    src: url('/src/assets/fonts/Pretendard-Light.woff') format('truetype');

  }
html {
  font-size: ${(props) =>
    props.isMobile
      ? '62.5%'
      : '120%'}; //TODO : 크기 임의 설정, 웹뷰 화면 크기 나오면 조정하기
}
  body {
    margin: 0;
    padding: 0;
    font-family: PretendardRegular;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color:${({ theme }) => theme.colors.black}
  }

  * {
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }

  button, a, input, textarea {
    &:active {
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
