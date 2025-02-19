import { SignUpLabel } from '../SignUp/SignUpLabel';
import { ElderRegisterLayout } from './ElderRegisterLayout';
import { ElderRegisterSubLabel } from './ElderRegisterSubLabel';
import { CheckboxButton } from './CheckboxButton';
import { SelectedButton } from './SelectedButton';
import {
  ElderData,
  useElderRegisterStore,
} from '../../store/elderRegisterStore';

export const ElderRegisterSchedule = () => {
  const { setElderData, setWorkTime, elder } = useElderRegisterStore();

  const weekdays = ['월', '화', '수', '목', '금', '토', '일'];
  const commonHoverColor = '#3b3bff';

  const dayMapping: Record<string, keyof ElderData> = {
    월: 'mon',
    화: 'tue',
    수: 'wed',
    목: 'thu',
    금: 'fri',
    토: 'sat',
    일: 'sun',
  };

  const handleDays = (selectedDays: string | string[]) => {
    if (Array.isArray(selectedDays)) {
      selectedDays.forEach((day) => {
        const dayKey = dayMapping[day];
        if (dayKey) {
          if (elder[dayKey]) {
            setElderData(dayKey, undefined);
          } else {
            setWorkTime(dayKey, { start: '09:00:00', end: '18:00:00' });
          }
        }
      });
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
      <CheckboxButton label="시간 협의 가능해요." checked={elder.negotiable} />
    </ElderRegisterLayout>
  );
};
