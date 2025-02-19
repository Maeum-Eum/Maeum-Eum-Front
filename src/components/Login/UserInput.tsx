import styled from 'styled-components';
import { useLoginStore } from '../../store/loginStore';

export const UserInput = () => {
  const {
    id,
    password,
    setId,
    setPassword,
    error,
  } = useLoginStore();

  return (
    <>
      <Label>아이디</Label>
      <Input
        type="text"
        placeholder="아이디를 입력해주세요."
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></Input>
      <Label>비밀번호</Label>
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

const Label = styled.div`
  ${({ theme }) => theme.fontStyles.bodyMediumSB}
  margin-bottom: 1rem;
  margin-top: 3rem;
`;

const Input = styled.input`
  width: 100%;
  border: 0.08rem solid ${({ theme }) => theme.colors.black20};
  border-radius: 1.3rem;
  font-size: 1.2rem;
  outline: none;
  text-decoration: none;
  height: 4rem;
  padding-left: 1.3rem;
  background-color: transparent;
  box-sizing: border-box;

  ${({ theme }) => theme.fontStyles.bodyMediumR};
  &:focus {
    border-color: ${({ theme }) => theme.colors.color};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.black40};
    opacity: 0.6;
  }
`;

const ErrorText = styled.p`
  color: #DA2528;
  font-size: 1rem;
`;
