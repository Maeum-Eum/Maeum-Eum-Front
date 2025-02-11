import styled from 'styled-components';

const Title = styled.div`
  ${({ theme }) => theme.fontStyles.largeSB};
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Login = () => {
  return <Title>login</Title>;
};
