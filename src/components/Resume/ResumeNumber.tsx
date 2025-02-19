import { useState } from 'react';
import { useResumeStore } from '../../store/resumeStore';
import { ElderRegisterLayout } from '../ElderRegister/ElderRegisterLayout';
import { Input } from '../Input';
import { SignUpLabel } from '../SignUp/SignUpLabel';

export const ResumeNumber = () => {
  const { resume, setCertificateCode } = useResumeStore();
  const [input, setInputValue] = useState(resume.certificateCode);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setCertificateCode(e.target.value);
  };

  return (
    <ElderRegisterLayout title="기본 정보 입력" require={true}>
      <SignUpLabel label="요양 보호사 자격증 번호를 알려주세요" />
      <Input
        placeholder="숫자를 입력해주세요."
        value={input}
        onChange={handleChange}
      />
    </ElderRegisterLayout>
  );
};
