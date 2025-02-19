import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { HiMiniHome } from 'react-icons/hi2';
import { FaSearch } from 'react-icons/fa';

export const NavigationBar = () => {
  const location = useLocation();
  const menuItems = [
    { path: '/', icon: <HiMiniHome />, label: '홈' },
    //{ path: '/near', icon: <FaSearch />, label: '근처 어르신' },
    {path : '/elderadmin', icon: < FaSearch/>, label:'어르신 관리'},
    {
      path: '/mypage',
      icon: <img src="public/icons/userProfile.svg" />,
      label: '내 정보',
    },
  ];

  return (
    <Items>
      {menuItems.map((item, index) => (
        <Item
          key={index}
          to={item.path}
          isActive={location.pathname === item.path}
        >
          {item.icon}
          <span>{item.label}</span>
        </Item>
      ))}
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

const Item = styled(Link)<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  color: ${(props) =>
    props.isActive ? props.theme.colors.mainColor : 'black'};
  align-items: center;
  text-decoration: none;
  justify-content: center;
  ${(props) => props.theme.fontStyles.head2SB};
  :first-child {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 1rem;
  }
  img {
    filter: ${(props) =>
      props.isActive
        ? 'invert(19%) sepia(82%) saturate(7496%) hue-rotate(245deg) brightness(90%) contrast(100%)'
        : 'none'};
  }
`;
