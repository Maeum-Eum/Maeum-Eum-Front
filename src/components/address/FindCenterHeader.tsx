import { useState } from 'react';
import { getCenterList } from '../../services/signup';
import { useCenterStore } from '../../store/centerStore';
import { BackButtonHeader } from '../BackButtonHeader';
import { Input } from '../Input';
import { RoundedButton } from '../SignUp/RoundedButton';
import { InputWrapper } from '../SignUp/SignUpLayout';

export const FindCenterHeader = () => {
  const { setCenter } = useCenterStore();
  const [centerName, setCenterName] = useState('');

  const onClick = async () => {
    try {
      const data = await getCenterList({ centerName });
      setCenter(data);
    } catch (error) {}
  };
  return (
    <div>
      <BackButtonHeader title="센터 검색하기" />
      <InputWrapper style={{ padding: '0 3rem' }}>
        <Input
          placeholder="소속 기관명을 입력해주세요."
          value={centerName}
          onChange={(e) => setCenterName(e.target.value)}
        />
        <RoundedButton text="검색하기" func={onClick} />
      </InputWrapper>
    </div>
  );
};
