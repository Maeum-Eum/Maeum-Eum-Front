import { useNavigate } from 'react-router';
import { ButtonFooter } from '../ButtonFooter';
import { useSignUpStore } from '../../store/signUpStore';
import { postManagerSignUp } from '../../services/signup';

export const handleSignupFooter = () => {
  const navigate = useNavigate();
  const {
    step: signUpStep,
    setStep,
    validateForm,
    formData,
  } = useSignUpStore();

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
};
