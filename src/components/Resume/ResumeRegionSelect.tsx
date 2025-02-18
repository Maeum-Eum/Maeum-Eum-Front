import { useState } from 'react';
import { ElderRegisterLayout } from '../ElderRegister/ElderRegisterLayout';
import { SelectedButton } from '../ElderRegister/SelectedButton';
import { SignUpLabel } from '../SignUp/SignUpLabel';

export const ResumeRegionSelect = () => {
  const [ ,setSelectedRegions] = useState<string[]>([]);
  const [ ,setSelectedCar] = useState<string>('');
  const handleCarSelect = (car: string | string[]) => {
    if (typeof car === 'string') {
      setSelectedCar(car);
    }
  };

  const handleRegions = (region: string | string[]) => {
    if (Array.isArray(region)) {
      setSelectedRegions(region);
    }
  };
  return (
    <ElderRegisterLayout title="기본 정보 입력" require={true}>
      <SignUpLabel label="본인 명의의 자동차를 소유하고 계신가요?" />
      <SelectedButton
        options={['있어요', '없어요']}
        multiSelect={false}
        onSelect={handleCarSelect}
        hoverColor={{ 있어요: '#371FF0', 없어요: '#371FF0' }}
      />
      <div style={{ marginTop: '2rem' }}></div>
      <SignUpLabel label="일할 수 있는 지역을 모두 선택해 주세요" />
      <SelectedButton
        options={['도보 15분 이내', '도보 20분 이내']}
        multiSelect={true}
        onSelect={handleRegions}
        hoverColor={{ "도보 15분 이내": '#371FF0', '도보 20분 이내': '#371FF0' }}
      />
       <SelectedButton
        options={['3km 이내', '5km 이내']}
        multiSelect={true}
        onSelect={handleRegions}
        hoverColor={{ "3km 이내": '#371FF0', "5km 이내": '#371FF0' }}
      />
    </ElderRegisterLayout>
  );
};
