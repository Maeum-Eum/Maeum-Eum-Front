import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Layout } from './components/Layout';
import { Outlet } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobile})`);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isMobile={isMobile} />
      <Layout isMobile={isMobile}>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
