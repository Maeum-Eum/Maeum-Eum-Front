import { ReactNode, useMemo, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { BottomPopup } from '../BottomPopup';
import { Dropdowns } from '../../pages/Home';
import { HomeDropdown } from './HomeDropdown';

interface HomeHeaderProps {
  child: ReactNode;
}

export const HomeHeader = ({ child }: HomeHeaderProps) => {
  return (
    <div>
      <Wrapper>
        {child}
        <Icons>
          <img src="public/icons/setting.svg"></img>
        </Icons>
      </Wrapper>
    </div>
  );
};
const Icons = styled.div`
  position: absolute;

  right: 1.5rem;
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
  justify-content: center;
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
    <div>
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
      <HomeOption />
    </div>
  );
};

const CareHomeHeader = () => {
  return (
    <div>
      <HomeHeader child={<span>서울 특별시 영등포구 문래동</span>}></HomeHeader>

      <HomeOption />
    </div>
  );
};

const DropDownWrapper = styled.div`
  align-self: center;
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

export const DynamicHomeHeader = () => {
  const role = useMemo(() => localStorage.getItem('userRole'), []);
  return role === 'ROLE_CAREGIVER' ? <CareHomeHeader /> : <SocialHomeHeader />;
};

const HomeOption = () => {
  return (
    <Dropdowns>
      <HomeDropdown
        items={['도보 15분 이내', '도보 20분 이내', '3km', '5km']}
      />
      <HomeDropdown items={['업무정확도순', '시간일치순', '높은급여순']} />
    </Dropdowns>
  );
};
