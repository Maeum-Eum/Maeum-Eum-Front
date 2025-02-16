import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Layout } from './components/Layout';
import { Outlet } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';
import GlobalStyle from './styles/GlobalStyle';
import { ButtonFooter } from './components/ButtonFooter';
import { NavigationBar } from './components/home/NavigationBar';
import { useLocation, useNavigate } from 'react-router';
import { useSignUpStore } from './store/signUpStore';
import { BackButtonHeader } from './components/BackButtonHeader';
import { HomeHeader } from './components/home/HomeHeader';
import { SignUpHeader } from './components/SignUp/SignUpHeader';
import { Input } from './components/Input';
import { RoundedButton } from './components/SignUp/RoundedButton';
import { InputWrapper } from './components/SignUp/SignUpLayout';

function App() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobile})`);
  const location = useLocation();
  const navigate = useNavigate();
  const { step, setStep, validateForm, formData } = useSignUpStore();
  const getHeader = () => {
    if (location.pathname.startsWith('/signup')) return <SignUpHeader />;
    if (location.pathname.startsWith('/elder-register'))
      return <BackButtonHeader title="어르신 등록" />;
    if (location.pathname === '/')
      return <HomeHeader child={<span>서울 특별시 영등포구 문래동</span>} />;
    if (location.pathname === '/accept')
      return <BackButtonHeader title="수락하기" />;
    if (location.pathname === '/search-center') {
      return (
        <div>
          <BackButtonHeader title="센터 검색하기" />
          <InputWrapper style={{ padding: '0 3rem' }}>
            <Input placeholder="소속 기관명을 입력해주세요." disabled={true} />
            <RoundedButton text="검색하기" func={() => {}} />
          </InputWrapper>
        </div>
      );
    }
    //각 라우터 별로 필요한 헤더 return

    return null; // Header가 필요 없는 페이지는 null 반환
  };

  const getFooter = () => {
    if (location.pathname.startsWith('/signup')) {
      if (step === 4)
        return (
          <ButtonFooter
            title="다음으로 넘어가기"
            nextStep={() => {
              if (validateForm()) navigate('/welcome');
            }}
            skip={true}
          />
        );

      return (
        <ButtonFooter
          title={step === 5 ? '회원가입 완료하기' : '다음으로 넘어가기'}
          nextStep={() => {
            switch (step) {
              case 1:
                if (validateForm(['id', 'password', 'passwordCheck', 'type'])) {
                  if (formData.type === '사회복지사') setStep(2);
                  else if (formData.type === '요양보호사') setStep(3);
                }
                break;

              case 2:
                if (validateForm(['name', 'phone', 'centerAddress'])) {
                  setStep(4);
                }
                break;

              case 3:
                if (validateForm(['name', 'address', 'phone'])) {
                  setStep(4);
                  console.log(3);
                }
                break;
              case 4:
                setStep(5);
                break;
              case 5:
                navigate('/welcome', { replace: true });
            }
          }}
          skip={step === 4}
        />
      );
    }

    if (location.pathname.startsWith('/elder-register')) {
      if (step == 4) {
        return (
          <ButtonFooter
            title="다음으로 넘어가기"
            nextStep={() => navigate('/welcome')}
          />
        );
      }
      return <ButtonFooter title="다음으로 넘어가기" nextStep={nextStep} />;
    }

    if (location.pathname.startsWith('/elder-register')) {
      if (step == 4) {
        return (
          <ButtonFooter
            title="다음으로 넘어가기"
            nextStep={() => navigate('/welcome', {replace: true})}
          />
        );
      }
      return <ButtonFooter title="다음으로 넘어가기" nextStep={nextStep} />;
    }

    if (location.pathname === '/') return <NavigationBar />;
    if (location.pathname === '/accept')
      return <ButtonFooter nextStep={() => {}} title="다음으로 넘어가기" />;
    if ((location.pathname === '/welcome', { replace: true })) {
      return (
        <ButtonFooter
          line={false}
          title="마음이음 시작하기"
          nextStep={() => {
            navigate('/', { replace: true });
          }}
        />
      );
    }
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
