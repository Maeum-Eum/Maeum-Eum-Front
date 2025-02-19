import styled from 'styled-components';
import { useAcceptStore } from '../store/acceptStore';

export const AcceptComplete = () => {
  const { phone, title } = useAcceptStore();

  return (
    <Wrapper>
      <Content>
        <Text>
          <span>{title}</span>
          <span>
            관리자가 곧 전화할 예정입니다.
            <br />
            기다려 주세요!
          </span>
          {phone !== '' && <span>관리자 전화번호: {phone}</span>}
        </Text>
      </Content>
    </Wrapper>
  );
};
const Content = styled.div`
  flex-grow: 1;
  margin-bottom: 7rem;
  margin-top: 18rem;
`;

const Wrapper = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => theme.fontStyles.bodyMediumL}
  text-align: center;
  span:nth-child(1) {
    margin-bottom: 8rem;
    ${({ theme }) => theme.fontStyles.headingB};
  }
  span:nth-child(2) {
    margin-bottom: 2rem;
    ${({ theme }) => theme.fontStyles.large2SB};
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;
