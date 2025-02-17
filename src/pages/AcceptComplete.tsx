import styled from 'styled-components';

export const AcceptComplete = () => {
  return (
    <Wrapper>
      <Content>
        <Text>
          <span>[평일/주말] 방문 요양 - 4등급 여자 어르신</span>
          <span>
            관리자가 곧 전화할 예정입니다.
            <br />
            기다려 주세요!
          </span>
          <span>관리자 전화번호: (010-0000-0000)</span>
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
