import { useNavigate } from 'react-router-dom';
import { useResumeStore } from '../../store/resumeStore';
import { ButtonFooter } from '../ButtonFooter';
import { submitResume } from '../../api/apiService';

export const ResumeFooter = () => {
  const navigate = useNavigate();
  const { step, nextStep, resume, resetResume } = useResumeStore();

  const handleResume = () => {
    console.log('저장된 이력서 데이터', resume);
  };

  const handleSubmit = async () => {
    try {
      const response = await submitResume();
      console.log('이력서', response);
      resetResume();
    } catch (error) {}
  };

  return (
    <ButtonFooter
      title={step === 9 ? '이력서 제출' : '다음으로 넘어가기'}
      nextStep={async () => {
        if (step === 9) {
          handleSubmit();
          navigate('/complete', { replace: true });
        } else {
          handleResume();
          nextStep();
        }
      }}
    />
  );
};
