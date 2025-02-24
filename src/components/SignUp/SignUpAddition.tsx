import styled from 'styled-components';
import { Experience } from './Experience';
import { SignUpLabel } from './SignUpLabel';
import { SignUpLayout } from './SignUpLayout';

import { useState } from 'react';
import { useSignUpStore } from '../../store/signUpStore';

export const SignUpAddition = () => {
  const { updateExperienceField, formData, setExperienceIndex } =
    useSignUpStore();
  const [cnt, setCnt] = useState(formData.experience.length || 1);
  return (
    <SignUpLayout title="추가 정보 입력" require={false}>
      <SignUpLabel label="경력사항" />
      {Array.from({ length: cnt }).map((_, index) => {
        const experience = formData.experience[index] ?? {
          startDate: '',
          endDate: '',
          work: '',
        };
        return (
          <div
            onClick={() => {
              setExperienceIndex(index);
            }}
          >
            <Experience
              key={index}
              start={experience.startDate}
              end={experience.endDate}
              work={experience.work}
              setStart={(i) => updateExperienceField(index, 'startDate', i)}
              setEnd={(i) => updateExperienceField(index, 'endDate', i)}
              setWork={(i) => updateExperienceField(index, 'work', i)}
              index={index}
            />
          </div>
        );
      })}

      {cnt === 3 ? null : (
        <Add
          onClick={() => {
            setCnt((cnt) => cnt + 1);

            updateExperienceField(cnt, 'startDate', '');
          }}
        >
          추가하기
        </Add>
      )}
    </SignUpLayout>
  );
};
const Add = styled.div`
  width: 100%;
  align-self: center;
  text-align: center;
  margin-top: 1rem;
  text-decoration: underline;
  ${({ theme }) => theme.fontStyles.head2M}
  cursor: pointer;
`;
