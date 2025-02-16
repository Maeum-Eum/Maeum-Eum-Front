import { useNavigate } from 'react-router';
import styled from 'styled-components';

interface BackButtonHeaderProps {
  title: string;
}

export const BackButtonHeader = ({ title }: BackButtonHeaderProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <BackIcon
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src="/icons/back.svg" alt="뒤로가기" />
      </BackIcon>
      <div>{title}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 11.2rem;
  ${(props) => props.theme.fontStyles.headingSB};
  display: flex;
  align-items: center;
  justify-items: center;
  :last-child {
    width: 100%;
    text-align: center;
  }
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
