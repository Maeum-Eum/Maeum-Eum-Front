import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { useHomeOptionStoreStore } from '../../store/homeOptionStore';
interface HomeDropdownProps {
  items: string[];
  home?: boolean;
  range?: boolean;
}

export const HomeDropdown = ({
  items,
  home = false,
  range,
}: HomeDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(0);
  const { setRange, setOrder, setDistance, setRangeText } =
    useHomeOptionStoreStore();
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
    if (home) {
      if (range) {
        setDistance(items[index].replace(' ', ''));
        setRange(
          index === 0 ? '1.25' : index === 1 ? '1.65' : index === 2 ? '3' : '5'
        );
      } else {
        setRangeText(
          index === 0 ? 'accuracy' : index === 1 ? 'time_match' : 'high_salary'
        );

        setOrder(index + 1 + '');
      }
    }
    setItem(index);
    setIsOpen(false);
  };
  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownButton onClick={() => setIsOpen((pre) => !pre)}>
        {items[item]} <IoIosArrowDown />
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
const DropdownWrapper = styled.div`
  color: ${(props) => props.theme.colors.black};
  position: relative;
  display: inline-block;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  border-right: 0.1rem solid ${(props) => props.theme.colors.black10};
  &:nth-last-child(1) {
    border-right: none;
  }
`;

const DropdownButton = styled.button`
  color: ${(props) => props.theme.colors.black};
  background-color: transparent;
  cursor: pointer;
  ${(props) => props.theme.fontStyles.head2SB};
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 1.3rem 1.3rem;
  width: 100%;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  ${(props) => props.theme.fontStyles.head2SB};
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.black10};
  }
`;
