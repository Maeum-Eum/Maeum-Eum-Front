import { ReactNode, useMemo, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { BottomPopup } from '../BottomPopup';
import { Dropdowns } from '../../pages/Home';
import { HomeDropdown } from './HomeDropdown';
import { useHomeOptionStoreStore } from '../../store/homeOptionStore';
import { useManagerHomeStore } from '../../store/managerHomeStore';
// import { useCareGiverHomeStore } from '../../store/careGiverHomeStore';

interface HomeHeaderProps {
  child: ReactNode;
}

export const HomeHeader = ({ child }: HomeHeaderProps) => {
  const { setModal } = useHomeOptionStoreStore();
  return (
    <div>
      <Wrapper>
        {child}
        <Icons>
          <Icon onClick={() => setModal(true)}>
            <img src="icons/setting.svg"></img>
          </Icon>
          <Icon onClick={() => setModal(true)}>
            <img src="icons/bell.svg"></img>
          </Icon>
        </Icons>
      </Wrapper>
    </div>
  );
};
const Icon = styled.div`
  img {
    width: 2.6rem;
    height: 2.6rem;
  }
`;
const Icons = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;

  right: 1.5rem;
`;
const Wrapper = styled.div`
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black10};
  background-color: ${(props) => props.theme.colors.background};
  height: 11.2rem;
  max-width: 440px;
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
  const { elderList, setElderId } = useManagerHomeStore();
  //TODO 정보 불러오기
  const { setElderName, elderName } = useHomeOptionStoreStore();

  return (
    <div>
      <HomeHeader
        child={
          <DropDownWrapper>
            <PersonButton onClick={() => setPopupOpen(true)}>
              <span> {elderName} </span>
              <IoIosArrowDown />
            </PersonButton>
            <span>맞춤 요양 보호사</span>
            <BottomPopup
              isOpen={isPopupOpen}
              onClose={() => setPopupOpen(false)}
              options={elderList.map((item) => item.elderName)}
              onSelect={(option) => {
                setElderId(
                  elderList[
                    elderList.map((item) => item.elderName).indexOf(option)
                  ].elderId
                );
                setElderName(option);
                setPopupOpen(false);
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
  // const { data } = useCareGiverHomeStore();
  //TODO 주소 넣기
  return (
    <div>
      <HomeHeader child={<span>{}</span>}></HomeHeader>
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
        home={true}
        range={true}
      />
      <HomeDropdown
        items={['최신순', '업무정확도순', '높은급여순']}
        home={true}
        range={false}
      />
    </Dropdowns>
  );
};
