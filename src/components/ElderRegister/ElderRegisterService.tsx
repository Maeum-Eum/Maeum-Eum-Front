import { useState } from 'react';
import { ElderRegisterLayout } from './ElderRegisterLayout';
import { SignUpLabel } from '../SignUp/SignUpLabel';
import { ElderRegisterSubLabel } from './ElderRegisterSubLabel';
import { SelectedButton } from './SelectedButton';

export const ElderRegisterService = () => {
  const [, setSelectedRegions] = useState<string[]>([]);

  const handleService = (service: string | string[]) => {
    if (Array.isArray(service)) {
      setSelectedRegions(service);
    }
  };

  return (
    <ElderRegisterLayout title="기본 정보 입력" require={true}>
      <SignUpLabel label="가능한 업무를 선택해 해주세요" />
      <ElderRegisterSubLabel label="요양보호사님의 조건에 딱맞는 어르신을 추천해드릴게요." />
      <SignUpLabel label="식사 보조" />
      <SelectedButton
        options={['스스로 식사 가능', '식사 차림 필요']}
        multiSelect={true}
        onSelect={handleService}
        hoverColor={{
          '스스로 식사 가능': '#371FF0',
          '식사 차림 필요': '#371FF0',
        }}
      />
      <SelectedButton
        options={['죽, 반찬 등 요리 필요', '콧줄 식사']}
        multiSelect={true}
        onSelect={handleService}
        hoverColor={{
          '죽, 반찬 등 요리 필요': '#371FF0',
          '콧줄 식사': '#371FF0',
        }}
      />

      <SignUpLabel label="배변 보조" />
      <SelectedButton
        options={['스스로 배변 가능', '배변 실수시 도움필요']}
        multiSelect={true}
        onSelect={handleService}
        hoverColor={{
          '스스로 배변 가능': '#371FF0',
          '배변 실수시 도움필요': '#371FF0',
        }}
      />
      <SelectedButton
        options={['기저기 케어 필요', '유치도뇨, 방관루, 장루 관리']}
        multiSelect={true}
        onSelect={handleService}
        hoverColor={{
          '기저기 케어 필요': '#371FF0',
          '유치도뇨, 방관루, 장루 관리': '#371FF0',
        }}
      />

      <SignUpLabel label="이동 보조" />
      <SelectedButton
        options={['스스로 거동 가능', '이동식 부족 도움']}
        multiSelect={true}
        onSelect={handleService}
        hoverColor={{
          '스스로 거동 가능': '#371FF0',
          '이동식 부족 도움': '#371FF0',
        }}
      />
      <SelectedButton
        options={['휠체어 이동 보조', '거동 불가']}
        multiSelect={true}
        onSelect={handleService}
        hoverColor={{
          '휠체어 이동 보조': '#371FF0',
          '거동 불가': '#371FF0',
        }}
      />

      <SignUpLabel label="일상 생활" />
      <SelectedButton
        options={['청소, 빨래 보조', '목욕 보조(목씻기)']}
        multiSelect={true}
        onSelect={handleService}
        hoverColor={{
          '청소, 빨래 보조': '#371FF0',
          '목욕 보조(목씻기)': '#371FF0',
        }}
      />
      <SelectedButton
        options={['병원 동행', '산책, 간단한 운동지원']}
        multiSelect={true}
        onSelect={handleService}
        hoverColor={{
          '병원 동행': '#371FF0',
          '산책, 간단한 운동지원': '#371FF0',
        }}
      />
      <SelectedButton
        options={['말벗 등 정서 지원', '인지 자극 활동']}
        multiSelect={true}
        onSelect={handleService}
        hoverColor={{
          '말벗 등 정서 지원': '#371FF0',
          '인지 자극 활동': '#371FF0',
        }}
      />
    </ElderRegisterLayout>
  );
};
