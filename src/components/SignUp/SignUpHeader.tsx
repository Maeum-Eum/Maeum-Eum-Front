import { useNavigate } from 'react-router';
import styled from 'styled-components';

export const SignUpHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <BackIcon onClick={() => navigate(-1)}>
        <img src="src/assets/icons/back.svg" alt="뒤로가기" />
      </BackIcon>
      회원가입
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fontStyles.headingSB}
  margin-top: 4.0rem;
  align-items: center;
  height: 7rem;
`;

const BackIcon = styled.button`
  position: absolute;
  left: 3rem;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
