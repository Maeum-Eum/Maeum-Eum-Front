import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
}

export const LoginButton = ({ onClick }: ButtonProps) => {
  return (
    <ButtonContainer>
      <Button onClick={onClick}>로그인하기</Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  alien-items: center;
  padding-top: 3.3rem;
  padding-bottom: 5.5rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Button = styled.button`
  bottom: 5.5rem;
  width: 20.7rem;
  padding: 1.3rem 0rem;
  box-sizing: border-box;
  border-radius: 1.3rem;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.color};
  ${({ theme }) => theme.fontStyles.headingB}
  color: #ffffff;
  &:hover {
    background-color: #3923cc;
  }
`;
