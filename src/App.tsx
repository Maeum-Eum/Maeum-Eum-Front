import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Layout } from './components/layout/Layout';
import { Outlet } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';
import GlobalStyle from './styles/GlobalStyle';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';

function App() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobile})`);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isMobile={isMobile} />
      <Layout isMobile={isMobile} header={<Header />} footer={<Footer />}>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
