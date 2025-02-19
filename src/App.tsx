import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Layout } from './components/layout/Layout';
import { Outlet, useNavigate } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';
import GlobalStyle from './styles/GlobalStyle';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { useEffect, useState } from 'react';
import { getUserRole } from './services/home';

function App() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobile})`);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return;
    }
    const fetchUserRole = async () => {
      try {
        setIsLoading(true);
        const response = await getUserRole();
        localStorage.setItem('userRole', response.role);
      } catch (error) {
        console.error('사용자 역할을 가져오는 데 실패:', error);
        navigate('/login', { replace: true });
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserRole();
  }, []);

  if (isLoading) return <div></div>;
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
