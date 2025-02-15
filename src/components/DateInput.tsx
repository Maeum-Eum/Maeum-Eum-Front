import { useState } from 'react';
import styled from 'styled-components';

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const DateInput = ({ value, onChange, placeholder }: DateInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/\D/g, '');

    if (inputValue.length > 4)
      inputValue = `${inputValue.slice(0, 4)}/${inputValue.slice(4)}`;
    if (inputValue.length > 7)
      inputValue = `${inputValue.slice(0, 7)}/${inputValue.slice(7, 9)}`;

    onChange(inputValue);
  };

  return (
    <StyledInput
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder={isFocused ? 'yyyy/mm/dd' : placeholder}
      onFocus={() => setIsFocused(true)}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 4rem;
  ${({ theme }) => theme.fontStyles.bodyMediumL}
  border-radius: 1.3rem;
  text-align: center;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.black40};
  }
  border: 0.08rem solid ${({ theme }) => theme.colors.black20};
`;
