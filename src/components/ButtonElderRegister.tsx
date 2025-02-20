import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonElderRegister = () => {
  const navigate = useNavigate();

  const toElderRegister = () => {
    navigate('/elder-register');
  };
  return (
    <Wrapper>
      <Button onClick={toElderRegister}>어르신 등록하기</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  `;
  
  const Button = styled.button`
  bottom: 5.5rem;
  padding: 1.3rem 0rem;
  width: 100%;
  box-sizing: border-box;
  border-radius: 1.3rem;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.mainColor};
  ${({ theme }) => theme.fontStyles.headingB}
  color: #ffffff;
  cursor: pointer;
`;
