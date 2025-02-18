import { useState } from 'react';
import { ElderRegisterLayout } from '../ElderRegister/ElderRegisterLayout';
import { SignUpLabel } from '../SignUp/SignUpLabel';
import { SelectedButton } from '../ElderRegister/SelectedButton';

export const ResumeGrade = () => {
  const [, setSelectedGrade] = useState<string[]>([]);
  const handleGrade = (grade: string | string[]) => {
    if (Array.isArray(grade)) {
      setSelectedGrade(grade);
    }
  };

  return (
    <ElderRegisterLayout title="희망 근무 조건 입력" require={true}>
      <SignUpLabel label="가능한 어르신 등급을 모두 알려주세요." />
      <SelectedButton
        options={['모두가능', '1등급', '2등급']}
        multiSelect={true}
        onSelect={handleGrade}
        gap="3rem"
        hoverColor={{
          모두가능: '#371FF0',
          '1등급': '#371FF0',
          '2등급': '#371FF0',
        }}
      />
      <SelectedButton
        options={['3등급', '4등급', '5등급']}
        multiSelect={true}
        onSelect={handleGrade}
        gap="3rem"
        hoverColor={{
          '3등급': '#371FF0',
          '4등급': '#371FF0',
          '5등급': '#371FF0',
        }}
      />
      <SelectedButton
        options={['인지 지원 등급']}
        multiSelect={true}
        onSelect={handleGrade}
        gap="3rem"
        hoverColor={{
          '인지 지원 등급': '#371FF0',
        }}
      />
    </ElderRegisterLayout>
  );
};
