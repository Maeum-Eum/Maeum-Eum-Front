import { useNavigate } from 'react-router-dom';
import { useElderRegisterStore } from '../../store/elderRegisterStore';
import { ButtonFooter } from '../ButtonFooter';
import { submitEider } from '../../api/apiService';

export const ElderRegisterFooter = () => {
  const navigate = useNavigate();
  const { step, nextStep, elder } = useElderRegisterStore();

  const handleElderData = () => {
    console.log('저장된 어르신 데이터', elder);
  };

  const handleElderSubmit = async () => {
    try {
      const response = await submitEider();
      console.log("어르신 등록 성공", response)
    } catch (error) {

    }
  };

  return (
    <ButtonFooter
      title={step === 5 ? '다음으로 넘어가기' : '다음으로 넘어가기'}
      nextStep={async () => {
        if (step === 5) {
          handleElderSubmit();
          handleElderData();
          navigate('/complete2', { replace: true });
        } else {
          nextStep();
        }
      }}
    />
  );
};
