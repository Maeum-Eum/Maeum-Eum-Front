import styled from 'styled-components';

export const BlankPage = ({ text }: { text: string }) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  padding-top: 30rem;

  align-items: center;
  ${({ theme }) => theme.fontStyles.large2B}
  color: ${({ theme }) => theme.colors.black40};
`;
