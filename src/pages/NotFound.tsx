import styled from 'styled-components';

export const NotFound = () => {
  return (
    <Wrapper>
      <Text>404 Not Found</Text>
      <Text>페이지를 찾을 수 없습니다.</Text>
    </Wrapper>
  );
};

const Text = styled.div`
  color: black;
  font-size: 1rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #371ff0;
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
