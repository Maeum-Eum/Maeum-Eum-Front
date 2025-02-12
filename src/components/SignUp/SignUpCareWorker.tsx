import { RoundedButton } from './RoundedButton';
import { SignUpInput } from './SignUpInput';
import { SignUpLabel } from './SignUpLabel';
import { InputWrapper, SignUpLayout } from './SignUpLayout';
import { useSignUpNavStore } from '../../store/signUpNavStore';

export const SignUpCareWorker = () => {
  const { nextStep } = useSignUpNavStore();
  return (
    <SignUpLayout func={nextStep} title="요양보호사님 정보 입력">
      <SignUpLabel label="이름" />
      <SignUpInput placeholder="이름을 입력해주세요" />
      <SignUpLabel label="휴대전화" />
      <SignUpInput placeholder="숫자만 입력해주세요" />
      <SignUpLabel label="주소" />
      <InputWrapper>
        <SignUpInput placeholder="주소를 입력해주세요" />
        <RoundedButton text={'검색하기'} func={() => {}}></RoundedButton>
      </InputWrapper>
    </SignUpLayout>
  );
};
