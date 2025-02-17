import styled from 'styled-components';
import { Input } from '../components/Input';
import { useAcceptStore } from '../store/acceptStore';

export const Accept = () => {
  const { step } = useAcceptStore();

  return (
    <Wrapper>
      {step === 1 ? (
        <Title>요양보호사님의 연락처를 알려주세요</Title>
      ) : (
        <Title>
          남기고 싶은 메시지를 작성해 주세요
          <OptionalText>(선택)</OptionalText>
        </Title>
      )}
      {step === 1 ? (
        <span>관리자님이 확인할 경우, 서로에게 연락처가 공개됩니다.</span>
      ) : (
        <span></span>
      )}
      {step === 1 ? (
        <Input placeholder="ex)010-1234-6671" maxLength={13}></Input>
      ) : (
        <Input placeholder="*10자 이상 입력해 주세요" maxLength={50}></Input>
      )}
      {step === 1 ? null : (
        <span style={{ alignSelf: 'flex-end' }}>(0/50)</span>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 3.2rem;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontStyles.bodyMediumL}

  span:nth-of-type(2) {
    margin-top: 1rem;
    margin-bottom: 2rem;
    ${({ theme }) => theme.fontStyles.bodyMediumR}
  }
`;

const Title = styled.span`
  border-top: 0.1rem solid ${({ theme }) => theme.colors.black10};
  padding-top: 2rem;
  ${({ theme }) => theme.fontStyles.headingSB}
`;
const OptionalText = styled.span`
  color: ${({ theme }) => theme.colors.sColor3};
  ${({ theme }) => theme.fontStyles.head2R}
`;
