import { useLocation, useNavigate } from 'react-router';
import { ButtonFooter } from '../ButtonFooter';
import { NavigationBar } from '../home/NavigationBar';
import { useSignUpStore } from '../../store/signUpStore';
import { useElderRegisterStore } from '../../store/elderRegisterStore';
import { useAcceptStore } from '../../store/acceptStore';
import { postManagerSignUp } from '../../services/signup';
import styled from 'styled-components';
import { HomeButtons } from '../home/HomeButtons';
import { useContactStore } from '../../store/contactStore';
import { useResumeStore } from '../../store/resumeStore';

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
  const { step: acceptStep, setStep: setAcceptStep } = useAcceptStore();
  const { step: resumeStep , nextStep: resumeNextStep, resume} = useResumeStore(); 

  const handleResume = () => {
    console.log("저장된 이력서 데이터", resume)
  }

  if (location.pathname === '/signup') {
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
              if (formData.type === '사회복지사') {
                postManagerSignUp(formData)
                  .then(() => {
                    navigate('/welcome', { replace: true });
                  })
                  .catch((error) => {
                    console.error('회원가입 실패:', error);
                  });
              }
          }
        }}
        skip={signUpStep === 4}
      />
    );
  }
  if (location.pathname.endsWith('/profile-upload'))
    return <ButtonFooter title="사진 등록하기" nextStep={() => {}} />;

  if (location.pathname.startsWith('/resume')) {
    return (
      <ButtonFooter
        title={resumeStep === 9 ? '이력서 제출' : '다음으로 넘어가기'}
        nextStep={async () => {
          if (resumeStep === 9) {
          
            navigate('/complete', { replace: true });
          } else {
            handleResume();
          resumeNextStep();
          }
        }}
      />
    );
  }

  if (location.pathname.startsWith('/elder-register')) {
    return (
      <ButtonFooter
        title={
          elderRegisterStep === 5 ? '다음으로 넘어가기' : '다음으로 넘어가기'
        }
        nextStep={() =>
          elderRegisterStep === 5
            ? navigate('/complete2', { replace: true })
            : nextStep()
        }
      />
    );
  }

  if (['/', '/near', '/mypage', '/admin'].includes(location.pathname))
    return <NavigationBar />;
  if (location.pathname === '/accept') {
    return (
      <ButtonFooter
        nextStep={() => {
          if (acceptStep === 2) {
            navigate('/accept/complete');
          } else {
            setAcceptStep(2);
          }
        }}
        title={acceptStep === 1 ? '다음으로 넘어가기' : '완료하기'}
      />
    );
  }
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
  if (location.pathname === '/welcome') {
    return (
      <ButtonFooter
        line={false}
        title="마음이음 시작하기"
        nextStep={() => navigate('/', { replace: true })}
      />
    );
  }

  if (location.pathname === '/complete') {
    return (
      <ButtonFooter
        line={false}
        title="확인"
        nextStep={() => navigate('/', { replace: true })}
      />
    );
  }

  if (location.pathname === '/complete2') {
    return (
      <ButtonFooter
        line={false}
        title="확인"
        nextStep={() => navigate('/', { replace: true })}
      />
    );
  }

  if (location.pathname.startsWith('/detail/elder')) {
    return (
      <Wrapper>
        <HomeButtons
          leftFunc={() => {}}
          rightFunc={() => {
            navigate('/accept');
          }}
          leftText="저장"
          rightText="수락하기"
        />
      </Wrapper>
    );
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
