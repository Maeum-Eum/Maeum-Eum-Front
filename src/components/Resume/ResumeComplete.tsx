import styled from "styled-components";

export const ResumeComplete = () => {
    return (
        <Wrapper>
            <Content>
            <Text>
          <span>이력서가 등록되었습니다.</span>
          <span>
            요양보호사님께 딱 맞는 일자리를 찾아드릴게요.
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
