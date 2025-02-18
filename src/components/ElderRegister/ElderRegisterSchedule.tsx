import { useState } from 'react';
import { SignUpLabel } from '../SignUp/SignUpLabel';
import { ElderRegisterLayout } from './ElderRegisterLayout';
import { ElderRegisterSubLabel } from './ElderRegisterSubLabel';
import { CheckboxButton } from './CheckboxButton';
import { SelectedButton } from './SelectedButton';

export const ElderRegisterSchedule = () => {
  const weekdays = ['월', '화', '수', '목', '금', '토', '일'];
  const commonHoverColor = '#3b3bff';
  const [, setSelectedDays] = useState<string[]>([]);
  const handleDays = (day: string | string[]) => {
    if (Array.isArray(day)) {
      setSelectedDays(day);
    }
  };

  return (
    <ElderRegisterLayout title="기본 정보 입력" require={true}>
      <SignUpLabel label="필요 일정을 선택해 주세요." />
      <ElderRegisterSubLabel label="어르신의 조건에 딱맞는 요양보호사님을 추천해드릴게요." />
      <SignUpLabel label="요일" />
      <SelectedButton
        options={weekdays}
        multiSelect={true}
        onSelect={handleDays}
        gap="0.5rem"
        hoverColor={Object.fromEntries(
          weekdays.map((day) => [day, commonHoverColor])
        )}
      />
      <CheckboxButton label="시간 협의 가능해요." />
    </ElderRegisterLayout>
  );
};
