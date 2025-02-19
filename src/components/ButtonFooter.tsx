import styled from 'styled-components';
import { useSignUpStore } from '../store/signUpStore';

export const ButtonFooter = ({
  nextStep,
  line = true,
  title,
  skip = false,
  isValid = true,
}: {
  nextStep: () => void;
  line?: boolean;
  title: string;
  skip?: boolean;
  isValid?: boolean;
}) => {
  const { setStep } = useSignUpStore();
  return (
    <Wrapper $line={line}>
      <Button onClick={isValid ? nextStep : () => {}} $isValid={isValid}>
        {title}
      </Button>
      {skip ? <Skip onClick={() => setStep(5)}>나중에 등록하기</Skip> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $line: boolean }>`
  border-top: ${(props) =>
    props.$line ? `0.5rem solid ${props.theme.colors.black5}` : 'none'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 13rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Button = styled.button<{ $isValid: boolean }>`
  bottom: 5.5rem;
  width: 20.7rem;
  padding: 1.3rem 0rem;
  box-sizing: border-box;
  border-radius: 1.3rem;
  border-color: transparent;
  background-color: ${({ theme, $isValid }) =>
    $isValid ? theme.colors.mainColor : '#A9A9F5'};
  ${({ theme }) => theme.fontStyles.headingB}
  color: #ffffff;
`;

const Skip = styled.span`
  margin-top: 1rem;
  text-decoration: underline;
  ${({ theme }) => theme.fontStyles.bodyMediumL}
  cursor: pointer;
`;
