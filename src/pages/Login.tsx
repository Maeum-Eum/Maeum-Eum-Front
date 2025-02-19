import styled from 'styled-components';
import { UserInput } from '../components/Login/UserInput';
import { LoginOption } from '../components/Login/LoginOption';
import { LoginButton } from '../components/Login/LoginButton';
import { LoginFooter } from '../components/Login/LoginFooter';
import { useEffect } from 'react';
import { LoginLogo } from '../components/Login/LoginLogo';
import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '../store/loginStore';

export const Login = () => {
  const {
    setUsername,

    login,
    isAuthenticated,

    setRememberId,
  } = useLoginStore();

  const navigate = useNavigate();

  useEffect(() => {
    const storeId = localStorage.getItem('rememberedId');
    if (storeId) {
      setUsername(storeId);
      setRememberId(true);
    }
  }, []);

  const handleLogin = async () => {
    await login();
    if (isAuthenticated) {
      navigate('/home');
    }
  };

  if (isAuthenticated) {
    return <p>로그인 성공 메인페이지로 이동</p>;
  }

  return (
    <LoginContainer>
      <LoginLogo />
      <LoginContent>
        <UserInput />
        <LoginOption />
        <LoginButton onClick={handleLogin} />
      </LoginContent>
      <LoginFooter />
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
  margin: 5rem auto;
  padding-top: 10rem;
`;

const LoginContent = styled.div`
  margin-top: 10rem;
  padding: 0 3rem;
`;
