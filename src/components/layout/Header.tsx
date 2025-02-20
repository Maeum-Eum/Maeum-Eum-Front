import { BackButtonHeader } from '../BackButtonHeader';
import { DynamicHomeHeader, HomeHeader } from '../home/HomeHeader';
import { SignUpHeader } from '../SignUp/SignUpHeader';
import { useLocation } from 'react-router';
import { InBoxTab } from '../inbox/InBoxTab';
import { FindCenterHeader } from '../address/FindCenterHeader';
import { BackButtonHomeHeader } from '../BackButtonHomeHeader';

export const Header = () => {
  const location = useLocation();

  if (location.pathname === '/signup') return <SignUpHeader />;
  if (location.pathname.startsWith('/elder-register'))
    return <BackButtonHeader title="어르신 등록" />;
  if (location.pathname.startsWith('/resume'))
    return <BackButtonHeader title="이력서 등록" />;
  if (location.pathname.startsWith('/inbox'))
    return (
      <div>
        <BackButtonHeader title="받은 지원함" />
        <InBoxTab isOut={false} />
      </div>
    );
  if (location.pathname.startsWith('/outgoing-box'))
    return (
      <div>
        <BackButtonHeader title="보낸 지원함" />
        <InBoxTab isOut={true} />
      </div>
    );
  if (['/', '/near'].includes(location.pathname)) return <DynamicHomeHeader />;
  if (location.pathname.startsWith('/mypage'))
    return <HomeHeader child={<span>내정보</span>} />;
  if (location.pathname.startsWith('/elder-admin'))
    return <BackButtonHomeHeader title='등록한 어르신' />;
  if (location.pathname.startsWith('/accept'))
    return <BackButtonHeader title="수락하기" />;
  if (location.pathname.startsWith('/apply'))
    return <BackButtonHeader title="지원하기" />;
  if (location.pathname === '/search-center') {
    return <FindCenterHeader />;
  }
  if (location.pathname.endsWith('/profile-upload'))
    return <BackButtonHeader title="프로필 사진 등록하기" />;

  if (location.pathname.startsWith('/detail'))
    return <BackButtonHeader title="자세히 보기" />;
  if (location.pathname.startsWith('/contact'))
    return <BackButtonHeader title="연락하기" />;
  if (location.pathname.startsWith('/modify-center')) {
    return <BackButtonHeader title="센터 정보 수정하기" />;
  }
  return null;
};
