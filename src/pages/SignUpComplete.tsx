import styled from 'styled-components';
import { SignUpFooter } from '../components/SignUp/SignUpFooter';
import { LoginLogo } from '../components/Login/LoginLogo';

export const SignUpComplete = () => {
  return (
    <Wrapper>
      <Content>
        <LoginLogo />
        <Text>
          <span>회원가입이 완료 되었습니다.</span>
          <span>
            마음이음에서 제공하는 특별한 서비스를
            <br />
            함께 시작해봐요
          </span>
        </Text>
      </Content>
      <SignUpFooter nextStep={() => {}} line={false} />
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
  span:first-child {
    margin-bottom: 2rem;
    ${({ theme }) => theme.fontStyles.large2SB};
    color: ${({ theme }) => theme.colors.mainColor};
    margin-top: 7rem;
  }
`;
