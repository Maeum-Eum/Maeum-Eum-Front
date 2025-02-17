import { RoundedButton } from '../SignUp/RoundedButton';
import { Input } from '../Input';
import { SignUpLabel } from '../SignUp/SignUpLabel';
import { InputWrapper } from '../SignUp/SignUpLayout';

export const FindPassword = () => {
  return (
    <>
      <SignUpLabel label="비밀번호 찾기" />
      <InputWrapper>
        <Input placeholder="휴대전화 번호를 입력해주세요." />
        <RoundedButton text={'인증번호 전송'} func={() => {}}></RoundedButton>
      </InputWrapper>
      <div style={{ marginTop: '1rem' }}></div>
      <InputWrapper>
        <Input placeholder="인증번호를 입력해주세요." />
        <RoundedButton text={'확인'} func={() => {}}></RoundedButton>
      </InputWrapper>
      <div style={{ marginTop: '2rem' }}></div>
      <SignUpLabel label="새 비밀번호" />
      <Input placeholder="비밀번호를 입력해주세요." />
      <SignUpLabel label="새 비밀번호 재확인" />
      <Input placeholder="비밀번호를 입력해주세요." />
    </>
  );
};
