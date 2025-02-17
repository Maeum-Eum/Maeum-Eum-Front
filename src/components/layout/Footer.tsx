import { useLocation, useNavigate } from 'react-router';
import { ButtonFooter } from '../ButtonFooter';
import { NavigationBar } from '../home/NavigationBar';
import { useSignUpStore } from '../../store/signUpStore';
import { useElderRegisterStore } from '../../store/elderRegisterStore';
import { useAcceptStore } from '../../store/acceptStore';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    step: signUpStep,
    setStep,
    validateForm,
    formData,
  } = useSignUpStore();
  const { step: elderRegisterStep, nextStep } = useElderRegisterStore();
  const { setStep: setAcceptStep } = useAcceptStore();

  if (location.pathname.startsWith('/signup')) {
    if (signUpStep === 4)
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
        title={signUpStep === 5 ? '회원가입 완료하기' : '다음으로 넘어가기'}
        nextStep={() => {
          switch (signUpStep) {
            case 1:
              if (validateForm(['id', 'password', 'passwordCheck', 'type'])) {
                formData.type === '사회복지사' ? setStep(2) : setStep(3);
              }
              break;
            case 2:
              if (validateForm(['name', 'phone', 'centerAddress'])) setStep(4);
              break;
            case 3:
              if (validateForm(['name', 'address', 'phone'])) setStep(4);
              break;
            case 4:
              setStep(5);
              break;
            case 5:
              navigate('/welcome', { replace: true });
          }
        }}
        skip={signUpStep === 4}
      />
    );
  }

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

  if (location.pathname === '/') return <NavigationBar />;
  if (location.pathname === '/accept') {
    return (
      <ButtonFooter
        nextStep={() => setAcceptStep(2)}
        title="다음으로 넘어가기"
      />
    );
  }
  if (location.pathname === '/welcome') {
    return (
      <ButtonFooter
        line={false}
        title="마음이음 시작하기"
        nextStep={() => navigate('/', { replace: true })}
      />
    );
  }

  return null;
};
