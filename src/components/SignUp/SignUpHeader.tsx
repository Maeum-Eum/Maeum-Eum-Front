import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useSignUpStore } from '../../store/signUpStore';

export const SignUpHeader = () => {
  const { step, setStep, formData } = useSignUpStore();

  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <BackIcon
        onClick={() =>
          step === 1
            ? navigate(-1)
            : step === 2 || step === 3
            ? setStep(1)
            : formData.type === '요양보호사'
            ? setStep(3)
            : setStep(2)
        }
      >
        <img src="/icons/back.svg" alt="뒤로가기" />
      </BackIcon>
      회원가입
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fontStyles.headingSB}
  align-items: center;
  height: 11.2rem;
`;

const BackIcon = styled.button`
  position: absolute;
  left: 3rem;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
