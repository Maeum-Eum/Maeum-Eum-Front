import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Layout } from './components/Layout';
import { Outlet } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';
import GlobalStyle from './styles/GlobalStyle';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobile})`);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle isMobile={isMobile} />
        <Layout isMobile={isMobile}>
          <Outlet />
        </Layout>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
