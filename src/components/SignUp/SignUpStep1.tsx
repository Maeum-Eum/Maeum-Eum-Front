import styled from 'styled-components';
import { SignUpInput } from './SignUpInput';
import { SignUpLabel } from './SignUpLabel';
import { InputWrapper, SignUpLayout } from './SignUpLayout';
import { useSignUpNavStore } from '../../store/signUpNavStore';
import { RoundedButton } from './RoundedButton';

interface buttonProps {
  isSelected: boolean;
}
export const SignUpStep1 = () => {
  const { nextStep } = useSignUpNavStore();
  return (
    <SignUpLayout func={nextStep} title="계정 정보 입력">
      <SignUpLabel label="아이디" />
      <InputWrapper>
        <SignUpInput placeholder="아이디를 입력해주세요" />
        <RoundedButton text={'중복확인'} func={() => {}}></RoundedButton>
      </InputWrapper>
      <SignUpLabel label="비밀번호" />
      <SignUpInput placeholder="비밀번호를 입력해주세요" />
      <SignUpLabel label="비밀번호 재확인" />
      <SignUpInput placeholder="비밀번호를 입력해주세요" />
      <Buttons>
        <SelectButton isSelected={true}>요양보호사입니다</SelectButton>
        <SelectButton isSelected={false}>사회복지사입니다</SelectButton>
      </Buttons>
    </SignUpLayout>
  );
};

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
`;
const SelectButton = styled.button<buttonProps>`
  background-color: transparent;
  height: 5.9rem;
  width: 100%;
  border-radius: 1.3rem;
  border: ${(props) =>
    props.isSelected
      ? `0.4rem solid ${props.theme.colors.color}`
      : `0.1rem solid ${props.theme.colors.black20}`};

  ${(props) =>
    props.isSelected
      ? `${props.theme.fontStyles.bodyMediumSB}`
      : `${props.theme.fontStyles.bodyMediumR}`}

  color:
  ${(props) =>
    props.isSelected
      ? `${props.theme.colors.black}`
      : `${props.theme.colors.black40}`};
  &:active {
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
`;
