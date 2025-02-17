import styled from 'styled-components';
import { Input } from '../Input';
import { ContactTitle } from './Contact1';

export const Contact4 = () => {
  return (
    <>
      <ContactTitle>
        남기고 싶은 메시지를 작성해 주세요
        <OptionalText>(선택)</OptionalText>
      </ContactTitle>

      <Input placeholder="*10자 이상 입력해 주세요" maxLength={50} />
      <span style={{ alignSelf: 'flex-end' }}>(0/50)</span>
    </>
  );
};

const OptionalText = styled.span`
  color: ${({ theme }) => theme.colors.sColor3};
  ${({ theme }) => theme.fontStyles.head2R}
`;
