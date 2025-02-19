import React from 'react';
import styled from 'styled-components';

interface BottomPopupProps {
  isOpen: boolean;
  onClose: () => void;
  options: string[];
  onSelect: (option: string) => void;
}

export const BottomPopup: React.FC<BottomPopupProps> = ({
  isOpen,
  onClose,
  options,
  onSelect,
}) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <BottomPopupContainer onClick={(e) => e.stopPropagation()}>
        <Bar />
        {options.map((option, index) => (
          <Option key={index} onClick={() => onSelect(option)}>
            {option}
          </Option>
        ))}
      </BottomPopupContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 500px;
  width: 100%;
  height: 100%;
  background: rgba(217, 217, 217, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 3000;
`;

const BottomPopupContainer = styled.div`
  width: 100%;
  background: white;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 0.5rem 3.5rem;
  padding-bottom: 3rem;
  box-shadow: 0px -4px 15px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Bar = styled.div`
  width: 6rem;
  max-width: 6rem;
  height: 0.7rem;
  background-color: ${(props) => props.theme.colors.black10};
  align-self: center;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
`;
const Option = styled.div`
  padding: 1.5rem 0;

  font-size: 1rem;
  ${({ theme }) => theme.fontStyles.head2SB}
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  text-align: left;
  &:last-child {
    border-bottom: none;
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.black10};
  }
`;
