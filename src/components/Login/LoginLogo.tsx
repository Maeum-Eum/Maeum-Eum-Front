import styled from 'styled-components';

export const LoginLogo = () => {
  return (
    <LogoContainer>
      <MainLogo>
        {' '}
        <img src="/icons/Logo.svg" />
      </MainLogo>
      <LogoText>
        <img src="/icons/LogoText.svg" />
      </LogoText>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 15rem;
  justify-content: center;
  align-items: center;
`;

const MainLogo = styled.div`
  img {
    width: 12rem;
    height: 12rem;
  }
`;

const LogoText = styled.div`
  img {
    width: 10rem;
    height: 5rem;
  }
`;
