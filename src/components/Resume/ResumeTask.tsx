import { useState } from 'react';
import { ElderRegisterLayout } from '../ElderRegister/ElderRegisterLayout';
import { ElderRegisterSubLabel } from '../ElderRegister/ElderRegisterSubLabel';
import { SelectedButton } from '../ElderRegister/SelectedButton';
import { SignUpLabel } from '../SignUp/SignUpLabel';

export const ResumeTask = () => {
  const [, setSelectedTask] = useState<string[]>([]);
  const handleTask = (task: string | string[]) => {
    if (Array.isArray(task)) {
      setSelectedTask(task);
    }
  };
  return (
    <ElderRegisterLayout title="기본 정보 입력" require={true}>
      <SignUpLabel label="가능한 업무를 선택해 해주세요" />
      <ElderRegisterSubLabel label="요양보호사님의 조건에 딱맞는 어르신을 추천해드릴게요." />
      <SignUpLabel label="식사 보조" />
      <SelectedButton
        options={['모두 가능', '식사 도움']}
        multiSelect={true}
        onSelect={handleTask}
        hoverColor={{ '모두 가능': '#371FF0', '식사 도움': '#371FF0' }}
      />
       <SelectedButton
        options={['요리가능', '콧줄 식사 도움']}
        multiSelect={true}
        onSelect={handleTask}
        hoverColor={{ '요리 가능': '#371FF0', '콧줄 식사 도움': '#371FF0' }}
      />

<SignUpLabel label="배변 보조" />
      <SelectedButton
        options={['모두 가능', '화장실 이용하기']}
        multiSelect={true}
        onSelect={handleTask}
        hoverColor={{ '모두 가능': '#371FF0', '화장실 이용하기': '#371FF0' }}
      />
       <SelectedButton
        options={['기저기 교환', '배뇨 • 배변 보조']}
        multiSelect={true}
        onSelect={handleTask}
        hoverColor={{ '기저기 교환': '#371FF0', '배뇨 • 배변 보조': '#371FF0' }}
      />

<SignUpLabel label="이동 보조" />
      <SelectedButton
        options={['모두 가능', '이동 도움']}
        multiSelect={true}
        onSelect={handleTask}
        hoverColor={{ '모두 가능': '#371FF0', '이동 도움': '#371FF0' }}
      />
       <SelectedButton
        options={['휠체어 이동 보조', '침대에서 휠체어 이동']}
        multiSelect={true}
        onSelect={handleTask}
        hoverColor={{ '휠체어 이동 보조': '#371FF0', '침대에서 휠체어 이동': '#371FF0' }}
      />

<SignUpLabel label="일상 생활" />
      <SelectedButton
        options={['모두 가능', '청소 및 주변 정돈']}
        multiSelect={true}
        onSelect={handleTask}
        hoverColor={{ '모두 가능': '#371FF0', '청소 및 주변 정돈': '#371FF0' }}
      />
       <SelectedButton
        options={['목욕 보조', '병원 동행']}
        multiSelect={true}
        onSelect={handleTask}
        hoverColor={{ '목욕 보조': '#371FF0', '병원 동행': '#371FF0' }}
      />
       <SelectedButton
        options={['간단한 운동 지원', '말벗 지원']}
        multiSelect={true}
        onSelect={handleTask}
        hoverColor={{ '간단한 운동 지원': '#371FF0', '말벗 지원': '#371FF0' }}
      />
       <SelectedButton
        options={['인지자극 활동',]}
        multiSelect={true}
        onSelect={handleTask}
        hoverColor={{ '인지자극 활동': '#371FF0', }}
      />
    </ElderRegisterLayout>
  );
};
