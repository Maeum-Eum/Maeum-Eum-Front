import styled from 'styled-components';
import { DateInput } from '../DateInput';
import { Input } from '../Input';
import { RoundedButton } from './RoundedButton';
import { InputWrapper } from './SignUpLayout';
import { WorkExperienceDropDown } from './WorkExperienceDropDown';
import { useNavigate } from 'react-router';

interface IExperience {
  start: string;
  end: string;
  work: string;
  setStart: (i: string) => void;
  setEnd: (i: string) => void;
  setWork: (i: string) => void;
}

export const Experience = ({
  start,
  end,
  work,
  setStart,
  setEnd,
  setWork,
}: IExperience) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <DateInputs>
        <DateInput
          value={start}
          onChange={setStart}
          placeholder="입사 연월일"
        />
        <div>부터</div>
        <DateInput value={end} onChange={setEnd} placeholder="퇴사 연월일" />
        <div>까지</div>
      </DateInputs>
      <InputWrapper>
        <Input placeholder="센터명을 입력해주세요" disabled={true} />
        <RoundedButton
          text={'검색하기'}
          func={() => {
            navigate('/search-center');
          }}
        ></RoundedButton>
      </InputWrapper>
      <WorkExperienceDropDown setWork={setWork} item={work} />
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
