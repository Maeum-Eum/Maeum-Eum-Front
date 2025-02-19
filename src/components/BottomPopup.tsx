import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa6';
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

export const AccessPermissionPopup: React.FC<BottomPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const [select, setSelect] = useState(false);
  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelect(true);
    localStorage.setItem('permission', 'true');
    onClose();
  };
  if (!isOpen) return null;
  return (
    <Overlay>
      <BottomPopupContainer onClick={(e) => e.stopPropagation()}>
        <Bar />
        <Content>
          <span>카메라 및 저장공간 접근</span>
          <span>사용자의 프로필 설정을 위해 사용합니다.</span>
        </Content>
        <Content>
          <span>위치 접근</span>
          <span>사용자의 위치 기반 추천을 위해 사용합니다.</span>
        </Content>
        <Check>
          권한 모두 허용
          <CheckBox onClick={onClick} $checked={select}>
            <FaCheck color="white" />
          </CheckBox>
        </Check>
      </BottomPopupContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 440px;
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
  background: ${(props) => props.theme.colors.background};
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

const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 0;
  span:last-child {
    ${({ theme }) => theme.fontStyles.bodyMediumR}
  }
  span:first-child {
    ${({ theme }) => theme.fontStyles.head2SB}
    margin-bottom: 1rem;
  }
`;

export const Check = styled.div`
  margin-top: 1rem;
  text-decoration: underline;
  ${({ theme }) => theme.fontStyles.headingSB}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const CheckBox = styled.div<{ $checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$checked
      ? props.theme.colors.mainColor
      : props.theme.colors.background};
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.6rem;
  border: 0.1rem solid ${(props) => props.theme.colors.black60};
  &:hover &:active {
    background-color: ${(props) => props.theme.colors.mainColor};
  }
`;
