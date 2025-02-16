import styled from "styled-components";

interface ButtonProps {
  text: string;
 
}
export const JobRoundedButton = ({text} : ButtonProps) => {
    return <Button>{text}</Button>
};

const Button = styled.button `
  border-radius: 1.1rem;
  ${(props) => props.theme.fontStyles.bodySmallM}
  background-color: transparent;
  border: 0.08rem solid ${({ theme }) => theme.colors.black60};
  width: 8rem;
  height: 4rem;
  white-space: nowrap;
`
