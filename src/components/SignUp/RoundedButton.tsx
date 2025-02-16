import styled from 'styled-components';

interface ButtonProps {
  text: string;
  func: () => void;
  active?: boolean;
}
export const RoundedButton = ({ text, func, active = true }: ButtonProps) => {
  return (
    <Button onClick={func} $active={active}>
      {text}
    </Button>
  );
};

const Button = styled.button<{ $active: boolean }>`
  border-radius: 1.1rem;
  ${(props) => props.theme.fontStyles.bodySmallM}
  background-color: transparent;
  border: 0.08rem solid
    ${({ theme, $active }) =>
      $active ? theme.colors.black : theme.colors.black20};
  width: 8rem;
  height: 4rem;
  white-space: nowrap;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.black20};
`;
