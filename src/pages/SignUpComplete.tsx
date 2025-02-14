import styled from 'styled-components';
import { SignUpFooter } from '../components/SignUp/SignUpFooter';

export const SignUpComplete = () => {
  return (
    <Wrapper>
      <Text>
        <span>회원가입이 완료 되었습니다.</span>
        <span>
          마음이음에서 제공하는 특별한 서비스를
          <br />
          함께 시작해봐요
        </span>
      </Text>
      <SignUpFooter nextStep={() => {}} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => theme.fontStyles.bodyMediumR}
  text-align: center;
  span:first-child {
    ${({ theme }) => theme.fontStyles.largeSB};
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;
