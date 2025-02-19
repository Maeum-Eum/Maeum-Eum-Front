import { useNavigate } from 'react-router-dom';
import { useElderRegisterStore } from '../../store/elderRegisterStore';
import { ButtonFooter } from '../ButtonFooter';

export const ElderRegisterFooter = () => {
  const navigate = useNavigate();
  const { step, nextStep, elder } = useElderRegisterStore();

  const handleElderData = () => {
    console.log('저장된 어르신 데이터', elder);
  };

  const handleElderSubmit = () => {};

  return (
    <ButtonFooter
      title={step === 5 ? '다음으로 넘어가기' : '다음으로 넘어가기'}
      nextStep={async () => {
        if (step === 5) {
          handleElderSubmit();
          navigate('/complete2', { replace: true });
        } else {
          handleElderData();
          nextStep();
        }
      }}
    />
  );
};
