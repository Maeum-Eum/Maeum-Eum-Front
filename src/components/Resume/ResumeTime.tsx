import { ElderRegisterLayout } from '../ElderRegister/ElderRegisterLayout';
import { SignUpLabel } from '../SignUp/SignUpLabel';
import { SelectedButton } from '../ElderRegister/SelectedButton';
import { ElderRegisterSubLabel } from '../ElderRegister/ElderRegisterSubLabel';
import { Input } from '../Input';
import { JobTimeSelect } from './JobTimeSelect';
import { useResumeStore } from '../../store/resumeStore';

export const ResumeTime = () => {
  const weekdays = ['월', '화', '수', '목', '금', '토', '일'];
  const commonHoverColor = '#3b3bff';

  const { setWorkDay, setWage, resume } = useResumeStore();

  const handleDays = (days: string | string[]) => {
    const dayMapping: Record<string, number> = {
      월: 0,
      화: 1,
      수: 2,
      목: 3,
      금: 4,
      토: 5,
      일: 6,
    };
    Array.isArray(days) &&
      setWorkDay(days.map((day) => dayMapping[day].toString()));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseInt(e.target.value, 10) : 0;
    setWage(Number.isNaN(value) ? 0 : value);
  };

  return (
    <ElderRegisterLayout title="기본 정보 입력" require={true}>
      <SignUpLabel label="일하는 요일을 선택해 주세요." />
      <SelectedButton
        options={weekdays}
        multiSelect={true}
        onSelect={handleDays}
        gap="0.5rem"
        hoverColor={Object.fromEntries(
          weekdays.map((day) => [day, commonHoverColor])
        )}
      />
      <SignUpLabel label="일하는 시간을 알려주세요" />
      <JobTimeSelect />
      <SignUpLabel label="원하는 급여를 입력해 주세요" />
      <ElderRegisterSubLabel label="마음이음의 권장 시급은 13,000원이에요." />
      <Input
        type="number"
        placeholder="숫자를 입력해주세요."
        value={resume.wage}
        onChange={handleChange}
      />
    </ElderRegisterLayout>
  );
};
