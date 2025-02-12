import styled from "styled-components";

interface Props {
  onClick: () => void;
}

export const LoginButton = ({onClick} : Props) => {
  return (
    <ButtonContainer>
      <Button onClick={onClick}>로그인 하기</Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  alien-items: center;
  margin-top: 3rem;
`;

const Button = styled.button`
  width: 40%;
  padding: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  background-color: #371ff0;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 16px;
  &:hover {
    background-color: #3923cc;
  }
`;
