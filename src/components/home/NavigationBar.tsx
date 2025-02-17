import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiMiniHome } from 'react-icons/hi2';
import { FaSearch } from 'react-icons/fa';

export const NavigationBar = () => {
  return (
    <Items>
      <Item to="/">
        <HiMiniHome />
        <span>홈</span>
      </Item>
      <Item to="/">
        <FaSearch />
        <span>근처 일자리</span>
      </Item>
      <Item to="/accept">
        <img src="public/icons/userProfile.svg" />
        <span>내 정보</span>
      </Item>
    </Items>
  );
};

const Items = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0px -4px 15px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  padding: 2.9rem 0;
  border-radius: 3rem 3rem 0 0;
`;

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  ${(props) => props.theme.fontStyles.head2SB};
  :first-child {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 1rem;
  }
  span {
  }
`;
