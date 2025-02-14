import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Layout } from './components/Layout';
import { Outlet } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';
import GlobalStyle from './styles/GlobalStyle';
import { BackButtonHeader } from './components/BackbuttonHeader';
import { ButtonFooter } from './components/ButtonFooter';
import { HomeHeader } from './components/home/homeHeader';
import { NavigationBar } from './components/home/NavigationBar';
import { useLocation } from 'react-router';

function App() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobile})`);
  const location = useLocation();
  const getHeader = () => {
    if (location.pathname.startsWith('/signup'))
      return <BackButtonHeader title="회원가입" />;
    if (location.pathname === '/')
      return <HomeHeader child={<span>서울 특별시 영등포구 문래동</span>} />;
    if (location.pathname === '/accept')
      return <BackButtonHeader title="수락하기" />;
    //각 라우터 별로 필요한 헤더 return

    return null; // Header가 필요 없는 페이지는 null 반환
  };

  const getFooter = () => {
    if (location.pathname.startsWith('/signup'))
      return <ButtonFooter title="다음으로 넘어가기" nextStep={() => {}} />;
    if (location.pathname === '/') return <NavigationBar />;
    if (location.pathname === '/accept')
      return <ButtonFooter nextStep={() => {}} title="다음으로 넘어가기" />;
    //각 라우터 별로 필요한 footer return

    return null; // Footer가 필요 없는 페이지는 null 반환
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isMobile={isMobile} />
      <Layout isMobile={isMobile} header={getHeader()} footer={getFooter()}>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
