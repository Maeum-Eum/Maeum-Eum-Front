import styled from 'styled-components';
import { SignUpInput } from './SignUpInput';
import { SignUpLabel } from './SignUpLabel';
import { InputWrapper, SignUpLayout } from './SignUpLayout';
import { useSignUpNavStore } from '../../store/signUpNavStore';
import { useState } from 'react';
import { RoundedButton } from './RoundedButton';

export const SignUpSocialWorker = () => {
  const [selected, setSelected] = useState<string>('있음');
  const { nextStep } = useSignUpNavStore();
  return (
    <SignUpLayout func={nextStep} title="사회복지사님 정보 입력">
      <SignUpLabel label="이름" />
      <SignUpInput placeholder="이름을 입력해주세요" />
      <SignUpLabel label="휴대전화" />
      <SignUpInput placeholder="숫자만 입력해주세요" />
      <SignUpLabel label="소속" />
      <InputWrapper>
        <SignUpInput placeholder="소속을 입력해주세요" />
        <RoundedButton text={'검색하기'} func={() => {}}></RoundedButton>
      </InputWrapper>
      <SignUpLabel label="목욕차량 소유 여부" />
      <Options>
        <RadioButton
          isSelected={selected === '있음'}
          onClick={() => setSelected('있음')}
        >
          <RadioCircle isSelected={selected === '있음'} />
          <Text isSelected={selected === '있음'}>있음</Text>
        </RadioButton>

        <RadioButton
          isSelected={selected === '없음'}
          onClick={() => setSelected('없음')}
        >
          <RadioCircle isSelected={selected === '없음'} />
          <Text isSelected={selected === '없음'}>없음</Text>
        </RadioButton>
      </Options>
    </SignUpLayout>
  );
};

const Options = styled.div`
  display: flex;
  gap: 1rem;
`;

const RadioButton = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const RadioCircle = styled.div<{ isSelected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0.08px solid #00000033;
  box-shadow: ${({ isSelected }) =>
    isSelected ? ' 0 0 0 0.4rem #1F2DF0 inset' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span<{ isSelected: boolean }>`
  font-size: 1rem;
  color: ${({ isSelected }) => (isSelected ? '#000' : '#00000066')};
`;
