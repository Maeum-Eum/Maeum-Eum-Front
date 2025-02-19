import { useLocation, useNavigate } from 'react-router';
import { ButtonFooter } from '../ButtonFooter';
import { NavigationBar } from '../home/NavigationBar';
import { useElderRegisterStore } from '../../store/elderRegisterStore';
import styled from 'styled-components';
import { HomeButtons } from '../home/HomeButtons';
import { useContactStore } from '../../store/contactStore';
import {
  FooterForDetailContactElder,
  FooterForDetailElder,
} from '../\bdetail/DetailFooter';

import { AcceptFooter } from '../accept/AcceptFooter';

import { patchCenterInfo } from '../../services/myPage';
import { useModifyCenterStore } from '../../store/modifyCenterStore';
import { SignupFooter } from '../SignUp/SignUpFooter';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { centerId, shortPr, hasCar } = useModifyCenterStore();

  const { step: elderRegisterStep, nextStep } = useElderRegisterStore();

  if (location.pathname === '/signup') {
    return <SignupFooter />;
  }
  if (location.pathname.endsWith('/profile-upload'))
    return <ButtonFooter title="사진 등록하기" nextStep={() => {}} />;

  if (location.pathname.startsWith('/resume')) {
    return (
      <ButtonFooter
        title={elderRegisterStep === 10 ? '이력서 제출' : '다음으로 넘어가기'}
        nextStep={() =>
          elderRegisterStep === 10
            ? navigate('/welcome', { replace: true })
            : nextStep()
        }
      />
    );
  }

  if (location.pathname.startsWith('/elder-register')) {
    return (
      <ButtonFooter
        title={
          elderRegisterStep === 4 ? '다음으로 넘어가기' : '다음으로 넘어가기'
        }
        nextStep={() =>
          elderRegisterStep === 4
            ? navigate('/welcome', { replace: true })
            : nextStep()
        }
      />
    );
  }

  if (['/', '/near', '/mypage'].includes(location.pathname))
    return <NavigationBar />;
  if (location.pathname === '/accept/complete') {
    return (
      <ButtonFooter
        nextStep={() => {
          navigate('/', { replace: true });
        }}
        title="확인"
      />
    );
  }
  if (location.pathname === '/apply/complete') {
    return (
      <ButtonFooter
        nextStep={() => {
          navigate('/', { replace: true });
        }}
        title="확인"
      />
    );
  }

  if (location.pathname.startsWith('/accept')) {
    return <AcceptFooter />;
  }

  if (location.pathname.startsWith('/apply')) {
    return <AcceptFooter />;
  }

  if (location.pathname === '/welcome') {
    return (
      <ButtonFooter
        line={false}
        title="마음이음 시작하기"
        nextStep={() => navigate('/login', { replace: true })}
      />
    );
  }

  if (location.pathname.startsWith('/detail/elder/contact')) {
    return <FooterForDetailContactElder />;
  }
  if (location.pathname.startsWith('/detail/elder')) {
    return <FooterForDetailElder />;
  }

  if (location.pathname.startsWith('/detail/care')) {
    return (
      <Wrapper>
        <HomeButtons
          leftFunc={() => {}}
          rightFunc={() => {
            navigate('/contact/1');
          }}
          leftText="저장"
          rightText="연락하기"
        />
      </Wrapper>
    );
  }
  if (location.pathname.startsWith('/modify-center')) {
    return (
      <ButtonFooter
        title="수정하기"
        nextStep={async () => {
          await patchCenterInfo(centerId, shortPr, hasCar);
        }}
      />
    );
  }
  if (location.pathname.startsWith('/contact')) {
    const { step, setStep } = useContactStore();

    if (step === 1) {
      return (
        <ButtonFooter title="다음으로 넘어가기" nextStep={() => setStep(2)} />
      );
    } else if (step === 4) {
      return <ButtonFooter title="완료하기" nextStep={() => {}} />;
    } else {
      return (
        <Wrapper>
          <HomeButtons
            leftFunc={() => {
              setStep(step - 1);
            }}
            rightFunc={() => {
              setStep(step + 1);
            }}
            leftText="이전으로"
            rightText="다음으로 넘어가기"
          />
        </Wrapper>
      );
    }
  }
  return null;
};
const Wrapper = styled.div`
  border-top: ${(props) => `0.5rem solid ${props.theme.colors.black5}`};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 13rem;
  background-color: ${({ theme }) => theme.colors.background};
`;
