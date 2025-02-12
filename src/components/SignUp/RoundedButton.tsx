import styled from 'styled-components';

interface ButtonProps {
  text: string;
  func: () => void;
}
export const RoundedButton = ({ text, func }: ButtonProps) => {
  return <Button onClick={func}>{text}</Button>;
};

const Button = styled.button`
  border-radius: 1.1rem;
  ${(props) => props.theme.fontStyles.bodySmallM}
  background-color: transparent;
  border: 0.08rem solid ${({ theme }) => theme.colors.black60};
  padding: 0.9rem 1.3rem;
  white-space: nowrap;
`;
