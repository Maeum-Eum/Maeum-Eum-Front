import { useState } from 'react';
import { Input } from '../Input';
import { SignUpLabel } from '../SignUp/SignUpLabel';
import { ElderRegisterLayout } from './ElderRegisterLayout';
import { SelectedButton } from './SelectedButton';
import { InputWrapper } from '../SignUp/SignUpLayout';
import { RoundedButton } from '../SignUp/RoundedButton';

export const ElderRegisterInfo = () => {
  const [selectedOption, setSelectedOption] = useState('');
  return ( // title  Elder 버전으로 따로 만들기 (필수) 항목 넣어야함
    <ElderRegisterLayout title="기본 정보 입력"> 
      <SignUpLabel label="성함" />
      <Input placeholder="성함을 입력해주세요." />
      <SignUpLabel label="성별" />
      <SelectedButton
        options={['남성', '여성']}
        selected={selectedOption}
        onSelect={setSelectedOption}
        hoverColor={{ 남성: '#ff6b6b', 여성: '#6bcff6' }}
      />
      <SignUpLabel label="생년 월일" />
      <Input placeholder="생년월일을 입력해주세요." />
      <SignUpLabel label="주소" />
      <InputWrapper> {/* 검색하기 기능 추가 및 아래 항목에 주소 나올 컴포넌트 생각하기기*/}
        <Input placeholder="주소를 입력해주세요." />
        <RoundedButton text={'검색하기'} func={() => {}} />
      </InputWrapper>
      <SignUpLabel label="등급" />
   
      <SelectedButton
        options={['1등급', '2등급', '3등급']}
        selected={selectedOption}
        onSelect={setSelectedOption}
        hoverColor={{ 남성: '#ff6b6b', 여성: '#6bcff6' }}
      />
      <div style={{marginTop:"1rem"}}></div>
      <SelectedButton
        options={['4등급', '5등급', '인지 지원 등급']}
        selected={selectedOption}
        onSelect={setSelectedOption}
        hoverColor={{ 남성: '#ff6b6b', 여성: '#6bcff6' }}
      />
    </ElderRegisterLayout>
  );
};
