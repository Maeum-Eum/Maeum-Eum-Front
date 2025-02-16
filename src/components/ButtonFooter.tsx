import styled from 'styled-components';

export const ButtonFooter = ({
  nextStep,
  line = true,
  title,
}: {
  nextStep: () => void;
  line?: boolean;
  title: string;
}) => {
  return (
    <Wrapper line={line}>
      <Button onClick={nextStep}>{title}</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ line: boolean }>`
  border-top: ${(props) =>
    props.line ? `0.5rem solid ${props.theme.colors.black5}` : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 13rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Button = styled.button`
  bottom: 5.5rem;
  width: 20.7rem;
  padding: 1.3rem 0rem;
  box-sizing: border-box;
  border-radius: 1.3rem;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.mainColor};
  ${({ theme }) => theme.fontStyles.headingB}
  color: #ffffff;
`;
