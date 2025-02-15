import styled from 'styled-components';
import { DateInput } from '../DateInput';
import { Input } from '../Input';
import { RoundedButton } from './RoundedButton';
import { InputWrapper } from './SignUpLayout';
import { WorkExperienceDropDown } from './WorkExperienceDropDown';
import { useState } from 'react';

export const Experience = () => {
  const [date, setDate] = useState('');

  return (
    <Wrapper>
      <DateInputs>
        <DateInput
          value={date}
          onChange={setDate}
          placeholder="경험 시작시간"
        />
        <div>부터</div>
        <DateInput
          value={date}
          onChange={setDate}
          placeholder="경험 종료시간"
        />{' '}
        <div>까지</div>
      </DateInputs>
      <InputWrapper>
        <Input placeholder="센터명을 입력해주세요" disabled={true} />
        <RoundedButton text={'검색하기'} func={() => {}}></RoundedButton>
      </InputWrapper>
      <WorkExperienceDropDown
        items={[
          '방문 요양',
          '입주 요양',
          '방문 목욕',
          '주야간 보호',
          '요양원',
          '병원',
          '병원 동행',
        ]}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
const DateInputs = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;

  div {
    white-space: nowrap;
    margin: 0 0.6rem;
    text-align: center;
    ${({ theme }) => theme.fontStyles.bodyMediumL};
  }
`;
