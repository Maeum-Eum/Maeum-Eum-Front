import styled from 'styled-components';

export const SignUpFooter = ({
  nextStep,
  line = true,
}: {
  nextStep: () => void;
  line?: boolean;
}) => {
  return (
    <Wrapper line={line}>
      <SignupButton onClick={nextStep}>다음으로 넘어가기</SignupButton>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ line: boolean }>`
  border-top: ${(props) =>
    props.line ? `0.5rem solid ${props.theme.colors.black5}` : 'none'};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 3.3rem;
  padding-bottom: 5.5rem;
  position: sticky;
  bottom: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SignupButton = styled.button`
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
