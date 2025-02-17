import styled from 'styled-components';
import { Input } from '../Input';
import { SignUpLabel } from './SignUpLabel';
import { ErrorText, InputWrapper, SignUpLayout } from './SignUpLayout';
import { RoundedButton } from './RoundedButton';
import { useSignUpStore } from '../../store/signUpStore';

interface buttonProps {
  $isSelected: boolean;
}
export const SignUpStep1 = () => {
  const { formData, updateFormData, errors } = useSignUpStore();
  return (
    <SignUpLayout title="계정 정보 입력" require={true}>
      <SignUpLabel label="아이디" />
      <InputWrapper>
        <Input
          placeholder="아이디를 입력해주세요"
          value={formData.id}
          onChange={(e) => updateFormData({ id: e.target.value })}
        />
        <RoundedButton
          text={'중복확인'}
          func={() => {}}
          active={formData.id !== ''}
        ></RoundedButton>
      </InputWrapper>
      {errors.id && (
        <ErrorText error={errors.id !== null}>{errors.id}</ErrorText>
      )}
      <SignUpLabel label="비밀번호" />
      <Input
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={formData.password}
        onChange={(e) => updateFormData({ password: e.target.value })}
      />
      {errors.password && (
        <ErrorText error={errors.password !== null}>
          {errors.password}
        </ErrorText>
      )}
      <SignUpLabel label="비밀번호 재확인" />
      <Input
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={formData.passwordCheck}
        onChange={(e) => updateFormData({ passwordCheck: e.target.value })}
      />
      {errors.passwordCheck && (
        <ErrorText error={errors.passwordCheck !== null}>
          {errors.passwordCheck}
        </ErrorText>
      )}
      <SignUpLabel label="회원유형 선택" />
      <Buttons>
        <SelectButton
          $isSelected={formData.type === '요양보호사'}
          onClick={() => updateFormData({ type: '요양보호사' })}
        >
          요양보호사
        </SelectButton>
        <SelectButton
          $isSelected={formData.type === '사회복지사'}
          onClick={() => updateFormData({ type: '사회복지사' })}
        >
          사회복지사
        </SelectButton>
      </Buttons>
      {errors.type && (
        <ErrorText error={errors.type !== null}>{errors.type}</ErrorText>
      )}
    </SignUpLayout>
  );
};

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;
const SelectButton = styled.button<buttonProps>`
  background-color: transparent;
  height: 5.9rem;
  width: 100%;
  border-radius: 1.3rem;
  border: ${(props) =>
    props.$isSelected
      ? `0.4rem solid ${props.theme.colors.mainColor}`
      : `0.1rem solid ${props.theme.colors.black20}`};

  ${(props) =>
    props.$isSelected
      ? `${props.theme.fontStyles.head2B}`
      : `${props.theme.fontStyles.head2R}`}

  color:
  ${(props) =>
    props.$isSelected
      ? `${props.theme.colors.black}`
      : `${props.theme.colors.black40}`};
`;
