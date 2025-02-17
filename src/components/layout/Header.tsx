import { BackButtonHeader } from '../BackButtonHeader';
import { HomeHeader, SocialHomeHeader } from '../home/HomeHeader';
import { SignUpHeader } from '../SignUp/SignUpHeader';
import { Input } from '../Input';
import { RoundedButton } from '../SignUp/RoundedButton';
import { InputWrapper } from '../SignUp/SignUpLayout';
import { useLocation } from 'react-router';
import { HomeDropdown } from '../home/HomeDropdown';
import { Dropdowns } from '../../pages/Home';

export const Header = () => {
  const location = useLocation();

  if (location.pathname === '/signup') return <SignUpHeader />;
  if (location.pathname.startsWith('/elder-register'))
    return <BackButtonHeader title="어르신 등록" />;
  if (location.pathname.startsWith('/resume'))
    return <BackButtonHeader title="이력서 등록" />;
  if (['/', '/near'].includes(location.pathname))
    //TODO: 요양보호사/사회복지사 여부에 따라 헤더 바꾸기
    return (
      <div>
        <SocialHomeHeader />
        <Dropdowns>
          <HomeDropdown
            items={['도보 15분 이내', '도보 20분 이내', '3km', '5km']}
          />
          <HomeDropdown items={['업무정확도순', '시간일치순', '높은급여순']} />
        </Dropdowns>
      </div>
    );
  if (location.pathname.startsWith('/mypage'))
    return <HomeHeader child={<span>내정보</span>} />;
  if (location.pathname.startsWith('/accept'))
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
  if (location.pathname.endsWith('/profile-upload'))
    return <BackButtonHeader title="프로필 사진 등록하기" />;

  if (location.pathname.startsWith('/detail'))
    return <BackButtonHeader title="자세히 보기" />;
  if (location.pathname.startsWith('/contact'))
    return <BackButtonHeader title="연락하기" />;

  return null;
};
