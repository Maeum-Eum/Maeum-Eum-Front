import styled from "styled-components";

export const GotoRegister = () => {
  return (
    <FooterContainer>
      <Divider />
      <Text>계정이 아직 없으신가요?</Text>
      <SignUp>회원가입하기</SignUp>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 20vh;
  margin-bottom: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Divider = styled.div`
  width: 120%;
  height: 5px;
  background-color: #f5f5f5;
  margin-bottom: 2rem;

`;

const Text = styled.p`
  font-size: 1.5rem;
  color: #666;
  display:flex;
  justify-content:center;
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
