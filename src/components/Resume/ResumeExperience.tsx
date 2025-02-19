import { useState } from 'react';
import { ElderRegisterLayout } from '../ElderRegister/ElderRegisterLayout';
import { SignUpLabel } from '../SignUp/SignUpLabel';
import { Experience } from '../SignUp/Experience';
import styled from 'styled-components';
import { useResumeStore } from '../../store/resumeStore';

export const ResumeExperience = () => {
  const { updateExperienceField, resume, setExperience } = useResumeStore();

  const [cnt, setCnt] = useState(resume.experience.length || 1);

  const addExperience = () => {
    if (cnt < 3) {
      setExperience([
        ...resume.experience,
        { startDate: '', endDate: '', centerId: 0, work: '' },
      ]);
      setCnt(cnt + 1);
    }
  };

  return (
    <ElderRegisterLayout title="추가 정보 입력" require={false}>
      <SignUpLabel label="경력사항" />
      {Array.from({ length: cnt }).map((_, index) => {
        const experience = resume.experience[index] ?? {
          startDate: '',
          endDate: '',
          //centerId: 0,
          work: '',
        };
        return (
          <Experience
            key={index}
            start={experience.startDate}
            end={experience.endDate}
            work={experience.work}
            setStart={(i) => updateExperienceField(index, 'startDate', i)}
            setEnd={(i) => updateExperienceField(index, 'endDate', i)}
           // setCenterId={(i) =>
            //  updateExperienceField(index, 'centerId', Number(i))
           // }
            setWork={(i) => updateExperienceField(index, 'work', i)}
          />
        );
      })}

      {resume.experience.length >= 3 ? null : (
        <Add onClick={addExperience}>추가 하기</Add>
      )}
    </ElderRegisterLayout>
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
