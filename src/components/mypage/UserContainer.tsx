import styled from 'styled-components';

export const UserContainer = () => {
  return (
    <Wrapper>
      <Profile>
        <Photo>
          <img
            src="public/icons/userProfile.svg"
            style={{ width: '60%', height: '60%', filter: 'white' }}
          ></img>
        </Photo>
        <Detail>
          <span>김철수</span>
          <span>주소</span>
        </Detail>
      </Profile>
      <Button>1분 이력서 등록하기</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 0.05rem solid ${({ theme }) => theme.colors.black10};
  padding: 1.4rem 2rem;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
`;

const Profile = styled.div`
  display: flex;
  gap: 1.8rem;
  margin-bottom: 2rem;
`;
const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.6rem;
  height: 6.6rem;
  background-color: grey;
  border-radius: 6.6rem;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  span:first-child {
    ${({ theme }) => theme.fontStyles.large2B};
  }
  span:last-child {
    ${({ theme }) => theme.fontStyles.bodyMediumR};
  }
`;
const Button = styled.button`
  border-radius: 1.3rem;
  width: 100%;
  border: none;
  padding: 0.9rem 0;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;
