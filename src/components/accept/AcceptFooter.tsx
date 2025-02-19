import { useNavigate } from 'react-router';
import { ButtonFooter } from '../ButtonFooter';
import { useAcceptStore } from '../../store/acceptStore';
import { postAcceptContact, postApply } from '../../services/contact';
import { useParams } from 'react-router';

export const AcceptFooter = () => {
  const navigate = useNavigate();
  const { step, setStep, phone, message, setPhone, setTitle } =
    useAcceptStore();
  const { contactId, elderId } = useParams();

  return (
    <ButtonFooter
      title={step === 2 ? '완료하기' : '다음으로 넘어가기'}
      nextStep={async () => {
        if (step === 1) {
          setStep(2);
        } else if (step === 2) {
          try {
            if (contactId !== undefined) {
              const res = await postAcceptContact(contactId, {
                phone,
                message,
              });
              setPhone(res.phone);
              setTitle(res.title);
              navigate('/accept/complete', { replace: true });
            } else if (elderId !== undefined) {
              const res = await postApply(elderId, { phone, message });
              setTitle(res);
              setPhone('');
              navigate('/apply/complete', { replace: true });
            }
          } catch (error) {
            console.error('API 호출 실패:', error);
          }
        }
      }}
      isValid={
        step === 1
          ? phone.length === 13
          : message.length >= 10 || message.length === 0
      }
    />
  );
};
