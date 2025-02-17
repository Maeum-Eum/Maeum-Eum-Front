import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { BottomPopup } from '../BottomPopup';

interface HomeHeaderProps {
  child: ReactNode;
}

export const HomeHeader = ({ child }: HomeHeaderProps) => {
  return (
    <Wrapper>
      {child}
      <Icons>
        <img src="public/icons/setting.svg"></img>
      </Icons>
    </Wrapper>
  );
};
const Icons = styled.div`
  padding-right: 1.5rem;
`;
const Wrapper = styled.div`
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black10};
  background-color: ${(props) => props.theme.colors.background};
  height: 11.2rem;
  max-width: 500px;
  ${(props) => props.theme.fontStyles.headingSB};
  display: flex;
  align-items: center;
  justify-items: center;
  :first-child {
    width: 100%;
    text-align: center;
  }
`;

export const SocialHomeHeader = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const options = ['홍길동 어르신', '홍길동 어르신 2'];
  const [person, setPerson] = useState(options[0]);
  return (
    <HomeHeader
      child={
        <DropDownWrapper>
          <PersonButton onClick={() => setPopupOpen(true)}>
            <span> {person} </span>
            <IoIosArrowDown />
          </PersonButton>
          <span>맞춤 요양 보호사</span>
          <BottomPopup
            isOpen={isPopupOpen}
            onClose={() => setPopupOpen(false)}
            options={options}
            onSelect={(option) => {
              setPerson(option);
              setPopupOpen(false);
              console.log(option);
            }}
          />
        </DropDownWrapper>
      }
    ></HomeHeader>
  );
};

export const CareHomeHeader = () => {
  return (
    <HomeHeader child={<span>서울 특별시 영등포구 문래동</span>}></HomeHeader>
  );
};

const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.fontStyles.headingSB};
`;

const PersonButton = styled.button`
  ${(props) => props.theme.fontStyles.headingSB};
  background-color: transparent;

  display: inline-block;
  border: none;

  cursor: pointer;
  :first-child {
    white-space: nowrap;
  }
`;
