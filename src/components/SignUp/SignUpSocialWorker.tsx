import styled from 'styled-components';
import { Input } from '../Input';
import { SignUpLabel } from './SignUpLabel';
import { ErrorText, InputWrapper, SignUpLayout } from './SignUpLayout';
import { RoundedButton } from './RoundedButton';
import { hangeulInput } from '../../utils/regex';
import { useSignUpStore } from '../../store/signUpStore';
import { useNavigate } from 'react-router';
import { formatPhoneNumber } from '../../utils/utils';

export const SignUpSocialWorker = () => {
  const { formData, updateFormData, errors } = useSignUpStore();
  const navigate = useNavigate();
  return (
    <SignUpLayout title="사회복지사님 정보 입력" require={true}>
      <SignUpLabel label="이름" />
      <Input
        placeholder="이름을 입력해주세요"
        value={formData.name}
        maxLength={10}
        onChange={(e) => updateFormData({ name: hangeulInput(e) })}
      />
      {errors.name && (
        <ErrorText error={errors.name !== null}>{errors.name}</ErrorText>
      )}
      <SignUpLabel label="휴대전화" />
      <Input
        placeholder="휴대전화 번호를 입력해주세요."
        value={formData.phone}
        maxLength={13}
        onChange={(e) => updateFormData({ phone: formatPhoneNumber(e) })}
      />
      {errors.phone && (
        <ErrorText error={errors.phone !== null}>{errors.phone}</ErrorText>
      )}
      <SignUpLabel label="소속" />
      <InputWrapper>
        <Input placeholder="소속을 입력해주세요" disabled={true} />
        <RoundedButton
          text={'검색하기'}
          func={() => {
            navigate('/search-center');
          }}
        ></RoundedButton>
      </InputWrapper>
      {errors.centerAddress && (
        <ErrorText error={errors.centerAddress !== null}>
          {errors.centerAddress}
        </ErrorText>
      )}
      <SignUpLabel label="목욕차량 소유 여부" />
      <Options>
        <RadioButton
          $isSelected={formData.hasCar}
          onClick={() => updateFormData({ hasCar: true })}
        >
          <RadioCircle $isSelected={formData.hasCar} />
          <Text isSelected={formData.hasCar}>있음</Text>
        </RadioButton>

        <RadioButton
          $isSelected={!formData.hasCar}
          onClick={() => updateFormData({ hasCar: false })}
        >
          <RadioCircle $isSelected={!formData.hasCar} />
          <Text isSelected={!formData.hasCar}>없음</Text>
        </RadioButton>
      </Options>
    </SignUpLayout>
  );
};

const Options = styled.div`
  display: flex;
  gap: 1rem;
`;

const RadioButton = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const RadioCircle = styled.div<{ $isSelected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0.08px solid #00000033;
  box-shadow: ${({ $isSelected }) =>
    $isSelected ? ' 0 0 0 0.4rem #1F2DF0 inset' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span<{ isSelected: boolean }>`
  font-size: 1rem;
  color: ${({ isSelected }) => (isSelected ? '#000' : '#00000066')};
`;
