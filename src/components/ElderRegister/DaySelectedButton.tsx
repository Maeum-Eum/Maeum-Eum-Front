import styled from 'styled-components';

interface ButtonProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

export const DaySelectedButton = ({
  options,
  selected,
  onSelect,
}: ButtonProps) => {
  return (
    <ButtonContainer>
      {options.map((option) => (
        <Button
          key={option}
          isSelected={selected === option}
          onClick={() => onSelect(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Button = styled.button<{ isSelected: boolean }>`
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: ${(props) => (props.isSelected ? 'white' : '#1d4ed8')};
  background-color: ${(props) => (props.isSelected ? '#371FF0' : 'white')};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#371FF0' : '#f3f4f6')};
  }
`;
