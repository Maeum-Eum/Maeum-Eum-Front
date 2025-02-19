import { useNavigate } from 'react-router';
import { ButtonFooter } from '../ButtonFooter';
import { useSignUpStore } from '../../store/signUpStore';
import {
  postCareGiverSignUp,
  postManagerSignUp,
  postPhoto,
} from '../../services/signup';

export const SignUpFooter = () => {
  const navigate = useNavigate();
  const {
    step: signUpStep,
    setStep,
    validateForm,
    formData,
    permission1,
    permission2,
    file,
  } = useSignUpStore();

  return (
    <ButtonFooter
      title={
        signUpStep === 5 || signUpStep === 2
          ? '회원가입 완료하기'
          : '다음으로 넘어가기'
      }
      nextStep={async () => {
        switch (signUpStep) {
          case 1:
            if (validateForm(['id', 'password', 'passwordCheck', 'type'])) {
              formData.type === '사회복지사' ? setStep(2) : setStep(3);
            }
            break;
          case 2:
            if (validateForm(['name', 'phone', 'centerAddress']))
              await postManagerSignUp(formData);
            navigate('/welcome', { replace: true });
            break;
          case 3:
            if (validateForm(['name', 'address', 'phone'])) setStep(4);
            break;
          case 4:
            if (validateForm(['experience'])) setStep(5);
            break;
          case 5:
            try {
              await postCareGiverSignUp(formData);
              if (file) {
                await postPhoto({ file, id: formData.id });
              }

              navigate('/welcome', { replace: true });
            } catch (error) {
              console.error('회원가입 실패:', error);
            }
            break;
        }
      }}
      isValid={
        (signUpStep === 1 && permission1 && permission2) || signUpStep !== 1
      }
      skip={signUpStep === 4}
    />
  );
};
