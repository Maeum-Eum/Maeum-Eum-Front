import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
interface HomeDropdownProps {
  item: string;
  setWork: (i: string) => void;
}
const items = [
  '방문 요양',
  '입주 요양',
  '방문 목욕',
  '주야간 보호',
  '요양원',
  '병원',
  '병원 동행',
];

export const WorkExperienceDropDown = ({
  item,
  setWork,
}: HomeDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

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

  const clickItem = (item: string) => {
    setWork(item);
    setIsOpen(false);
  };
  return (
    <DropdownWrapper ref={dropdownRef} $isOpen={isOpen}>
      <DropdownButton
        onClick={() => setIsOpen((pre) => !pre)}
        $isOpen={isOpen}
        $item={item}
      >
        {item === '' ? '경력사항 선택하기' : item}
        {isOpen ? (
          <IoIosArrowUp style={{ marginLeft: '1.5rem' }} />
        ) : (
          <IoIosArrowDown style={{ marginLeft: '1.5rem' }} />
        )}
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          {items.map((i, index) => (
            <DropdownItem key={i} onClick={() => clickItem(i)}>
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

const DropdownButton = styled.button<{ $isOpen: boolean; $item: string }>`
  background-color: transparent;
  color: ${(props) =>
    props.$isOpen
      ? props.theme.colors.white
      : props.$item !== ''
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
