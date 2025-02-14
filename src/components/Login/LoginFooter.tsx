import { useNavigate } from 'react-router';
import styled from 'styled-components';

export const LoginFooter = () => {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <Text>계정이 아직 없으신가요?</Text>
      <SignUp onClick={() => navigate('/signup')}>회원가입하기</SignUp>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  border-top: 0.5rem solid ${({theme}) => theme.colors.black5};
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 3.3rem;
  position: sticky;
  bottom: 0;
  z-index: 1000;
  background-color: ${({theme}) => theme.colors.background}
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: #666;
  display: flex;
  justify-content: center;
`;

const SignUp = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-decoration: underline;
  cursor: pointer;
  background: none;
  border: none;
  &:hover {
    color: #371ff0;
  }
`;
