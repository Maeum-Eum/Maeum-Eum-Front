import { InputWrapper } from '../SignUp/SignUpLayout';
import { SignUpInput } from '../SignUp/SignUpInput';
import { RoundedButton } from '../SignUp/RoundedButton';
import { SignUpLabel } from '../SignUp/SignUpLabel';

export const FindId = () => {
  return (
    <>
      <SignUpLabel label="아이디 찾기" />
      <InputWrapper>
        <SignUpInput placeholder="휴대전화 번호를 입력해주세요." />
        <RoundedButton text={'인증번호 전송'} func={() => {}} />
      </InputWrapper>
      <div style={{ marginTop: '1rem' }}></div>
      <InputWrapper>
        <SignUpInput placeholder="인증번호를 입력해주세요." />
        <RoundedButton text={'확인'} func={() => {}} />
      </InputWrapper>
    </>
  );
};
