import styled from "styled-components";

export const ElderRegisterComplete = () => {
    return (
        <Wrapper>
            <Content>
            <Text>
          <span>김순자 어르신이 등록되었습니다.</span>
          <span>
            어르신에 딱 맞는 요양보호사를 찾아드릴게요.
          </span>
        </Text>
            </Content>
        </Wrapper>
    )
}

const Content = styled.div`
  flex-grow: 1;
  margin-bottom: 7rem;
  margin-top: 18rem;
`;

const Wrapper = styled.div`
  min-height: 60dvh;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => theme.fontStyles.bodyMediumL}
  text-align: center;
  span:first-child {
    margin-bottom: 2rem;
    ${({ theme }) => theme.fontStyles.large2SB};
    color: ${({ theme }) => theme.colors.mainColor};
    margin-top: 7rem;
  }
`;