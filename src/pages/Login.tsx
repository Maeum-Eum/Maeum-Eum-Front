import styled from "styled-components";
import { UserInput } from "../components/Login/UserInput";
import { LoginOption } from "../components/Login/LoginOption";
import { LoginButton } from "../components/Login/LoginButton";
import { GotoRegister } from "../components/Login/GotoRegister";
import { useEffect, useState } from "react";

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberId, setRememberId] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);

  useEffect(() => {
    const storeId = localStorage.getItem("rememberdId");
    if (storeId) {
      setId(storeId);
      setRememberId(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await mockLogin(id, password);
      console.log("로그인 성공: ", response);
      setError("");
      if (rememberId) {
        localStorage.setItem("rememberdId", id);
      } else {
        localStorage.removeItem("rememberdId");
      }

      if (autoLogin) {
        localStorage.setItem("autoLogin", "true");
      }
    } catch (error) {
      setError("로그인 실패 : 아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <Title>
      <LoginContainer>
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
        <GotoRegister />
      </LoginContainer>
    </Title>
  );
};

const Title = styled.div`
  ${({ theme }) => theme.fontStyles.largeSB};
  align-items: center;
  display: flex;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: auto;
  padding: 160px 8px;
`;

// 가짜 로그인 API (Mock API)
const mockLogin = (id: string, password: string) => {
  return new Promise((resolve, reject) => {
    if (id === "test" && password === "123456") {
      resolve({ success: true, token: "mockToken123" });
    } else {
      reject({
        success: false,
        message: "아이디 또는 비밀번호가 올바르지 않습니다.",
      });
    }
  });
};
