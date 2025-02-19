import styled from 'styled-components';
import { Input } from '../Input';
import { ContactTitle } from './Contact1';
import { useContactStore } from '../../store/contactStore';
import { formatPhoneNumber } from '../../utils/utils';

export const Contact3 = () => {
  const { phonenumber, setPhonenumber } = useContactStore();
  return (
    <>
      <ContactTitle>관리자님의 연락처를 알려주세요</ContactTitle>
      <SubText>
        요양 보호사님이 수락할 경우,
        <br />
        서로에게 연락처가 공개됩니다
      </SubText>
      <Input
        placeholder="전화번호를 입력해주세요"
        maxLength={13}
        value={phonenumber}
        onChange={(e) => setPhonenumber(formatPhoneNumber(e))}
      />
    </>
  );
};

const SubText = styled.div`
  margin-bottom: 2rem;
  flex-direction: column;
  ${({ theme }) => theme.fontStyles.bodyMediumR}
`;
