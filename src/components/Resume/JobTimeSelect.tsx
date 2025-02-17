import { useState } from 'react';
import styled from 'styled-components';

export const JobTimeSelect = () => {
  const [selectedTime, setSelectedTime] = useState<string[]>([]);
  const [isFlexible, setIsFlexible] = useState<boolean>(false);

  const timeOptions = [
    { label: '오전', time: '9시-12시', icon: '🌤️' },
    { label: '오후', time: '12시-18시', icon: '🍚' },
    { label: '저녁', time: '18시-21시', icon: '🌙' },
  ];

  const handleTimeSelect = (label: string) => {
    if (selectedTime.includes(label)) {
      setSelectedTime(selectedTime.filter((time) => time !== label));
    } else {
      setSelectedTime([...selectedTime, label]);
    }
  };

  const toggleFlexible = () => {
    setIsFlexible((prev) => !prev);
  };

  return (
    <ButtonContainer>
      <TimeButtons>
        {timeOptions.map((option) => (
          <TimeButton
            key={option.label}
            isSelected={selectedTime.includes(option.label)}
            onClick={() => handleTimeSelect(option.label)}
          >
            <Label>{option.label}</Label>
            <Icon>{option.icon}</Icon>
            <Time>{option.time}</Time>
          </TimeButton>
        ))}
      </TimeButtons>

      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          id="flexible-time"
          checked={isFlexible}
          onChange={toggleFlexible}
        />
        <CheckboxLabel htmlFor="flexible-time">
          시간 협의 가능해요
        </CheckboxLabel>
      </CheckboxContainer>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
  margin-top: 2rem;
`;

const TimeButtons = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const TimeButton = styled.button<{ isSelected: boolean }>`
  flex: 1;
  padding: 1.5rem;
  border: 2px solid ${(props) => (props.isSelected ? '#371FF0' : '#ccc')};
  border-radius: 1rem;
  background-color: ${(props) => (props.isSelected ? '#371FF0' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) =>
    props.isSelected ? '0 4px 6px rgba(0,0,0,0.2)' : 'none'};
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    border-color: #371ff0;
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;

 
`;

const Label = styled.div`
  margin-bottom: 0.5rem;
  ${({ theme }) => theme.fontStyles.bodyMediumSB}
  font-weight: 600;
`;

const Time = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  accent-color: #371ff0;
`;

const CheckboxLabel = styled.label`
  font-size: 1.1rem;
  color: #333;
  cursor: pointer;
`;
