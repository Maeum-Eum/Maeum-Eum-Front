import styled from 'styled-components';
import { UserInput } from '../components/Login/UserInput';
import { LoginOption } from '../components/Login/LoginOption';
import { LoginButton } from '../components/Login/LoginButton';
import { LoginFooter } from '../components/Login/LoginFooter';
import { useEffect, useState } from 'react';
import { LoginLogo } from '../components/Login/LoginLogo';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberId, setRememberId] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storeId = localStorage.getItem('rememberedId');
    if (storeId) {
      setId(storeId);
      setRememberId(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await mockLogin(id, password);
      console.log('로그인 성공: ', response);
      setError('');
      if (rememberId) {
        localStorage.setItem('rememberedId', id);
      } else {
        localStorage.removeItem('rememberedId');
      }

      if (autoLogin) {
        localStorage.setItem('autoLogin', 'true');
      }

      localStorage.setItem('isLogin', 'true');

      navigate('/');
    } catch (error) {
      setError('로그인 실패 : 아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <LoginContainer>
      <LoginLogo />
      <LoginContent>
        <UserInput
          id={id}
          setId={setId}
          password={password}
          setPassword={setPassword}
          error={error}
        />
        <LoginOption
          rememberId={rememberId}
          setRememberId={setRememberId}
          autoLogin={autoLogin}
          setAutoLogin={setAutoLogin}
        />
        <LoginButton onClick={handleLogin} />
      </LoginContent>
      <LoginFooter />
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
  margin: 5rem auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginContent = styled.div`
  padding: 0 3rem;
`;

// 가짜 로그인 API (Mock API)
const mockLogin = (id: string, password: string) => {
  return new Promise((resolve, reject) => {
    if (id === 'test' && password === '123456') {
      resolve({ success: true, token: 'mockToken123' });
    } else {
      reject({
        success: false,
        message: '아이디 또는 비밀번호가 올바르지 않습니다.',
      });
    }
  });
};
