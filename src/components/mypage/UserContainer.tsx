import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export interface IUserContainer {
  name: string;
  address: string;
  profileImage: string;
  isResumeRegistered?: boolean;
  centerId?: number;
}

export const UserContainer = ({
  name,
  address,
  profileImage,
  isResumeRegistered,
  centerId,
}: IUserContainer) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Profile>
        <Photo>
          {profileImage != '' ? (
            <img
              src={profileImage}
              style={{
                width: '100%',
                height: '100%',
              }}
            ></img>
          ) : (
            <img
              src="public/icons/userProfile.svg"
              style={{
                width: '60%',
                height: '60%',
                filter: 'invert(1) brightness(1000%)',
              }}
            ></img>
          )}
        </Photo>
        <Detail>
          <span>{name}</span>
          <span>{address}</span>
        </Detail>
      </Profile>
      {isResumeRegistered === undefined ? (
        <Button
          onClick={() => {
            navigate(`/modify-center/${centerId}`);
          }}
        >
          센터 정보 수정하기
        </Button>
      ) : isResumeRegistered ? (
        <Button>대표 이력서 수정</Button>
      ) : (
        <Button>1분 이력서 등록하기</Button>
      )}
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
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.6rem;
  height: 6.6rem;
  background-color: ${({ theme }) => theme.colors.black20};
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
