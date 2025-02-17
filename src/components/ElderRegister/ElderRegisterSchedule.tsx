import { useState } from 'react';
import { SignUpLabel } from '../SignUp/SignUpLabel';
import { DaySelectedButton } from './DaySelectedButton';
import { ElderRegisterLayout } from './ElderRegisterLayout';
import { ElderRegisterSubLabel } from './ElderRegisterSubLabel';
import { CheckboxButton } from './CheckboxButton';

export const ElderRegisterSchedule = () => {
  const weekdays = ['월', '화', '수', '목', '금', '토', '일'];
  const [ ,setSelectedDays] = useState<string[]>([]);

  const handleDaySelect = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <ElderRegisterLayout title="기본 정보 입력">
      <SignUpLabel label="필요 일정을 선택해 주세요." />
      <ElderRegisterSubLabel label="어르신의 조건에 딱맞는 요양보호사님을 추천해드릴게요." />
      <SignUpLabel label="요일" />
      <DaySelectedButton
        options={weekdays}
        selected={''}
        onSelect={handleDaySelect}
      />
      <CheckboxButton label='시간 협의 가능해요.'/>
    </ElderRegisterLayout>
  );
};
