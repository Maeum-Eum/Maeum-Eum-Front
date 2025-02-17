import { BackButtonHeader } from '../BackButtonHeader';
import { HomeHeader } from '../home/HomeHeader';
import { SignUpHeader } from '../SignUp/SignUpHeader';
import { Input } from '../Input';
import { RoundedButton } from '../SignUp/RoundedButton';
import { InputWrapper } from '../SignUp/SignUpLayout';
import { useLocation } from 'react-router';

export const Header = () => {
  const location = useLocation();

  if (location.pathname.startsWith('/signup')) return <SignUpHeader />;
  if (location.pathname.startsWith('/elder-register'))
    return <BackButtonHeader title="어르신 등록" />;
  if (location.pathname.startsWith('/resume'))
    return <BackButtonHeader title="이력서 등록" />;
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

  return null;
};
