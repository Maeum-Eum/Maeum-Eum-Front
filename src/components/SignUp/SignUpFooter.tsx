import styled from 'styled-components';

export const SignUpFooter = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <Wrapper>
      <Button onClick={nextStep}>다음으로 넘어가기</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 5.5rem;
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
`;
