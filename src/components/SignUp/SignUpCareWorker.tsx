import { RoundedButton } from './RoundedButton';
import { Input } from '../Input';
import { SignUpLabel } from './SignUpLabel';
import { InputWrapper, SignUpLayout } from './SignUpLayout';

export const SignUpCareWorker = () => {
  return (
    <SignUpLayout title="요양보호사님 정보 입력">
      <SignUpLabel label="이름" />
      <Input placeholder="이름을 입력해주세요" />
      <SignUpLabel label="휴대전화" />
      <Input placeholder="숫자만 입력해주세요" />
      <SignUpLabel label="주소" />
      <InputWrapper>
        <Input placeholder="주소를 입력해주세요" />
        <RoundedButton text={'검색하기'} func={() => {}}></RoundedButton>
      </InputWrapper>
    </SignUpLayout>
  );
};
