import { useState } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  options: string[];
  onSelect: (option: string | string[]) => void;
  hoverColor?: { [key: string]: string };
  multiSelect: boolean;
  gap?: string;
  maxWidth?: string;
  fontSize?: string;
}

export const SelectedButton = ({
  options,
  onSelect,
  hoverColor,
  multiSelect,
  gap = '2rem',
  maxWidth = '48%',
  fontSize = '1.5rem',
}: ButtonProps) => {
  const [selected, setSelected] = useState<string | string[]>(
    multiSelect ? [] : ''
  );

  const handleClick = (option: string) => {
    if (multiSelect) {
      const currentSelected = selected as string[];
      const updatedSelected = currentSelected.includes(option)
        ? currentSelected.filter((item) => item !== option)
        : [...currentSelected, option];
      setSelected(updatedSelected);
      onSelect(updatedSelected);
    } else {
      setSelected(selected === option ? '' : option);
      onSelect?.(selected === option ? '' : option);
    }
  };

  const isSelected = (option: string) => {
    return multiSelect
      ? (selected as string[]).includes(option)
      : selected === option;
  };
  return (
    <ButtonContainer gap={gap}>
      {options.map((option) => (
        <Button
          key={option}
          isSelected={isSelected(option)}
          hoverColor={hoverColor?.[option]}
          onClick={() => handleClick(option)}
          maxWidth={maxWidth}
          fontSize={fontSize}
        >
          {option}
        </Button>
      ))}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div<{ gap: string }>`
  display: flex;
  justify-content: flex-start;
  gap: ${(props) => props.gap};
  width: 100%;
  box-sizing: border-box;
  margin-top: 2rem;
`;

const Button = styled.button<{
  isSelected: boolean;
  hoverColor?: string;
  maxWidth: string;
  fontSize: string;
}>`
  flex: 1 1 48%;
  max-width: ${(props) => props.maxWidth};
  padding: 2rem;
  border: 0.2rem solid ${(props) => props.theme.colors.black40};
  border-radius: 20px;
  color: ${(props) =>
    props.isSelected ? '#FFFFFF' : props.theme.colors.black80};
  background-color: ${(props) =>
    props.isSelected ? props.hoverColor : 'white'};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-size: ${(props) => props.fontSize};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  &:hover {
    background-color: ${(props) =>
      props.isSelected ? props.hoverColor : '#f3f4f6'};
  }
`;
