import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
interface HomeDropdownProps {
  items: string[];
}

export const WorkExperienceDropDown = ({ items }: HomeDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const clickItem = (index: number) => {
    setItem(index);
    setIsOpen(false);
  };
  return (
    <DropdownWrapper ref={dropdownRef} $isOpen={isOpen}>
      <DropdownButton
        onClick={() => setIsOpen((pre) => !pre)}
        $isOpen={isOpen}
        $item={item}
      >
        {item === -1 ? '경력사항 선택하기' : items[item]}
        {isOpen ? (
          <IoIosArrowUp style={{ marginLeft: '1.5rem' }} />
        ) : (
          <IoIosArrowDown style={{ marginLeft: '1.5rem' }} />
        )}
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          {items.map((i, index) => (
            <DropdownItem key={i} onClick={() => clickItem(index)}>
              {i}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownWrapper>
  );
};
const DropdownWrapper = styled.div<{ $isOpen: boolean }>`
  margin-top: 0.5rem;
  position: relative;
  display: inline-block;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.$isOpen ? props.theme.colors.mainColor : 'transparent'};

  border: 0.08rem solid ${(props) => props.theme.colors.black10};
  border-radius: 1.3rem;
`;

const DropdownButton = styled.button<{ $isOpen: boolean; $item: number }>`
  background-color: transparent;
  color: ${(props) =>
    props.$isOpen
      ? props.theme.colors.white
      : props.$item !== -1
      ? props.theme.colors.black
      : props.theme.colors.black40};
  cursor: pointer;
  ${(props) => props.theme.fontStyles.bodyMediumR};
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 1.3rem;
  border: 0.08rem solid ${(props) => props.theme.colors.black60};
  width: 100%;
`;

const DropdownItem = styled.div`
  padding: 1.5rem 0;
  text-align: center;
  cursor: pointer;
  ${(props) => props.theme.fontStyles.bodyMediumR};
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.black10};
  }
`;
