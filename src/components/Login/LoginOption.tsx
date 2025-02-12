import styled from "styled-components";

interface Props {
  rememberId: boolean;
  setRememberId: (remember: boolean) => void;
  autoLogin: boolean;
  setAutoLogin: (autoLogin: boolean) => void;
}

export const LoginOption = ({ rememberId, setRememberId, autoLogin, setAutoLogin }: Props) => {
  return (
    <OptionContainer>
      <CheckboxContainer>
        <label>
          <input type="checkbox" checked={rememberId} onChange={() => setRememberId(!rememberId)}/> 아이디 저장하기
        </label>
        <label>
          <input type="checkbox"  checked={autoLogin} onChange={() => setAutoLogin(!autoLogin)}/> 자동로그인
        </label>
      </CheckboxContainer>
      <FindPassword>계정정보를 잊어버렸어요</FindPassword>
    </OptionContainer>
  );
};

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: 5rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 3rem;
  font-size: 14px;
`;

const FindPassword = styled.button`
  color: #666;
  border: none;
  background: none;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 800;
  &:hover {
  color: #4a33ff;
  }
`;
