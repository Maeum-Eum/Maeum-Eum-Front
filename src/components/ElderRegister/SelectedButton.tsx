import styled from "styled-components"

interface ButtonProps {
    options: string[];
    selected: string;
    onSelect: (option: string) => void;
    hoverColor?: {[key: string] : string}
}

export const SelectedButton = ({options, selected,onSelect, hoverColor} : ButtonProps) => {
    return (
        <ButtonContainer>
          {options.map((option) => (
            <Button
              key={option}
              isSelected={selected === option}
              hoverColor={hoverColor?.[option]}
              onClick={() => onSelect(option)}
              
            >
              {option}
            </Button>
          ))}
        </ButtonContainer>
      );
}

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Button = styled.button <{isSelected : boolean; hoverColor?: string}> `
      padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: ${(props) => (props.isSelected ? 'white' : '#1d4ed8')};
  background-color: ${(props) => (props.isSelected ? props.hoverColor : 'white')};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) =>  (props.isSelected ? props.hoverColor : '#f3f4f6')};
  }
`;
