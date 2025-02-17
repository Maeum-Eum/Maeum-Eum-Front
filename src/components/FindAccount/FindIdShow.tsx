import styled from 'styled-components';

export const FindIdShow = () => {
  return (
    <Container>
      <IdShow>
        <p>
          홍길동 님의 아이디는 <b>Abc1234</b> 입니다.
        </p>
      </IdShow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  height: 50dvh;
`;
const IdShow = styled.div`
  font-weight: 600;
  font-size: 3rem;
  text-align: center;
  b {
    color: #371ff0;
  }
`;
