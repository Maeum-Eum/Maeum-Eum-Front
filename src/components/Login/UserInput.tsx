import styled from 'styled-components';

interface Props {
  id: string;
  setId: (ud: string) => void;
  password: string;
  setPassword: (password: string) => void;
  error: string;
}

export const UserInput = ({
  id,
  setId,
  password,
  setPassword,
  error,
}: Props) => {
  return (
    <InputContainer>
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
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 2rem;
  font-size: 16px;
  border: 3px solid #888;
  outline: none;
  border-radius: 20px;
  &:focus {
    border-color: #333;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 1rem;
`;
