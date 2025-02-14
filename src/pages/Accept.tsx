import styled from 'styled-components';
import { Input } from '../components/Input';

export const Accept = () => {
  return (
    <Wrapper>
      <span>요양보호사님의 연락처를 알려주세요.</span>
      <span>관리자님이 확인할 경우, 서로에게 연락처가 공개됩니다.</span>
      <Input placeholder="전화번호를 입력해주세요"></Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 3.2rem;
  display: flex;
  flex-direction: column;
  height: 100dvh;

  span:first-child {
    border-top: 0.1rem solid ${({ theme }) => theme.colors.black10};
    padding-top: 2rem;
    ${({ theme }) => theme.fontStyles.headingSB}
  }

  span:nth-of-type(2) {
    margin-top: 1rem;
    margin-bottom: 3.5rem;
    ${({ theme }) => theme.fontStyles.bodyMediumR}
  }
`;
