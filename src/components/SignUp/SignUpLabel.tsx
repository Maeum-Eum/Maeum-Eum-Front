import styled from 'styled-components';

export const SignUpLabel = ({ label }: { label: string }) => {
  return <Title>{label}</Title>;
};

const Title = styled.div`
  ${({ theme }) => theme.fontStyles.bodyMediumSB}
  margin-bottom: 2rem;
  margin-top: 3rem;
`;
