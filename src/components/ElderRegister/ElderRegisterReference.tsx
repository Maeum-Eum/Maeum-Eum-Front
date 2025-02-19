import { SignUpLabel } from '../SignUp/SignUpLabel';
import { ElderRegisterLayout } from './ElderRegisterLayout';
import { ElderRegisterSubLabel } from './ElderRegisterSubLabel';
import { SelectedButton } from './SelectedButton';
import { useElderRegisterStore } from '../../store/elderRegisterStore';

export const ElderRegisterReference = () => {
  const { setElderData} = useElderRegisterStore();
 

  return (
    <ElderRegisterLayout title="추가 정보 입력" require={false}>
      <SignUpLabel label="참고 항목을 선택해 주세요" />
      <ElderRegisterSubLabel label="요양보호사님과의 매칭율이 높아져요" />
      <SignUpLabel label="돌봄 시간 중 어르신의 가족" />
      <SelectedButton
        options={['집에 있어요', '집에 없어요']}
        multiSelect={false}
        onSelect={(family) => {
          if (typeof family === 'string') {
            setElderData('family', family === '집에 있어요' ? '집에 있어요' : '집에 없어요');
          }
        }}
        hoverColor={{ '집에 있어요': '#371FF0', '집에 없어요': '#371FF0' }}
      />

      <SignUpLabel label="어르신의 반려동물" />
      <SelectedButton
        options={['있어요', '없어요']}
        multiSelect={false}
        onSelect={(pet) => {
          if (typeof pet === 'string') {
            setElderData('pet', pet === '있어요' ? '있어요' : '없어요');
          }
        }}
        hoverColor={{ '있어요': '#371FF0', '없어요': '#371FF0' }}
      />
    </ElderRegisterLayout>
  );
};
