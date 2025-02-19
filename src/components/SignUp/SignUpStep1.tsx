import styled from 'styled-components';
import { Input } from '../Input';
import { SignUpLabel } from './SignUpLabel';
import { ErrorText, InputWrapper, SignUpLayout } from './SignUpLayout';
import { RoundedButton } from './RoundedButton';
import { useSignUpStore } from '../../store/signUpStore';
import { postValidateId } from '../../services/signup';
import { useState } from 'react';
import { Check, CheckBox } from '../BottomPopup';
import { FaCheck } from 'react-icons/fa';

interface buttonProps {
  $isSelected: boolean;
}
export const SignUpStep1 = () => {
  const {
    formData,
    updateFormData,
    errors,
    setDuplicate,
    permission1,
    setPermission1,
    setPermission2,
    permission2,
  } = useSignUpStore();
  const [check, setCheck] = useState('');
  const onClick = () => {
    setPermission1(true);
    setPermission2(true);
    if (permission1 && permission2) {
      setPermission1(false);
      setPermission2(false);
    }
  };
  return (
    <SignUpLayout title="계정 정보 입력" require={true}>
      <SignUpLabel label="아이디" />
      <InputWrapper>
        <Input
          placeholder="아이디를 입력해주세요"
          value={formData.id}
          onChange={(e) => {
            updateFormData({ id: e.target.value.replace(/\s/g, '') });
            setDuplicate(null);
            setCheck('');
          }}
        />
        <RoundedButton
          text={'중복확인'}
          func={async () => {
            try {
              const res = await postValidateId(formData.id);
              if (res === 200) {
                setDuplicate(false);
                setCheck('*사용 가능한 아이디입니다.');
              }
            } catch (error) {
              setCheck('');
              setDuplicate(true);
            }
          }}
          active={
            formData.id !== '' &&
            errors.id !== '*8~20자의 영문소문자와 숫자만 입력 가능합니다.'
          }
        ></RoundedButton>
      </InputWrapper>
      {errors.id && check === '' && (
        <ErrorText error={errors.id !== null}>{errors.id}</ErrorText>
      )}

      {check && (
        <ErrorText error={check === '*사용할 수 없는 아이디입니다'}>
          {check}
        </ErrorText>
      )}
      <SignUpLabel label="비밀번호" />
      <Input
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={formData.password}
        maxLength={20}
        onChange={(e) =>
          updateFormData({ password: e.target.value.replace(/\s/g, '') })
        }
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
        maxLength={20}
        onChange={(e) =>
          updateFormData({ passwordCheck: e.target.value.replace(/\s/g, '') })
        }
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
      <Permission>
        <Content>
          <CheckBox
            onClick={() => setPermission1(!permission1)}
            $checked={permission1}
          >
            <FaCheck color="white" />
          </CheckBox>
          <span>[필수] 개인정보 수집 및 이용 동의</span>
        </Content>
        <Content>
          <CheckBox
            onClick={() => setPermission2(!permission2)}
            $checked={permission2}
          >
            <FaCheck color="white" />
          </CheckBox>
          <span>[필수] 이용약관 동의</span>
        </Content>
        <Check>
          <CheckBox onClick={onClick} $checked={permission1 && permission2}>
            <FaCheck color="white" />
          </CheckBox>
          약관에 모두 동의
        </Check>
      </Permission>
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
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 1rem 0;

  column-gap: 1rem;
  span:last-child {
    ${({ theme }) => theme.fontStyles.head2R}
    margin-bottom: 1rem;
  }
`;

const Permission = styled.div`
  margin-top: 4rem;
`;
