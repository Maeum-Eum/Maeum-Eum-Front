import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLoginStore } from '../../store/loginStore';

export const LoginOption = () => {
  const { rememberId, setRememberId, autoLogin, setAutoLogin } =
    useLoginStore();

  const navigate = useNavigate();

  const findAccount = () => {
    navigate('find-account');
  };
  return (
    <OptionContainer>
      <CheckboxContainer>
        <label>
          <input
            type="checkbox"
            checked={rememberId}
            onChange={() => setRememberId(!rememberId)}
          />{' '}
          아이디 저장하기
        </label>
        <label>
          <input
            type="checkbox"
            checked={autoLogin}
            onChange={() => setAutoLogin(!autoLogin)}
          />{' '}
          자동로그인
        </label>
      </CheckboxContainer>
      <FindPassword onClick={() => findAccount()}>
        계정정보를 잊어버렸어요
      </FindPassword>
    </OptionContainer>
  );
};

const OptionContainer = styled.div`
  ${({ theme }) => theme.fontStyles.bodySmallM}
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: 2rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1rem;
`;

const FindPassword = styled.button`
  color: #000000;
  opacity: 80%;
  border: none;
  background: none;
  cursor: pointer;
  text-decoration: underline;

  font-weight: 600;
  &:hover {
    color: #4a33ff;
  }
`;
