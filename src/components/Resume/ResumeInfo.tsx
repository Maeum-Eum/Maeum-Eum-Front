import styled from 'styled-components';
import { ElderRegisterLayout } from '../ElderRegister/ElderRegisterLayout';
import { Input } from '../Input';
import { SignUpLabel } from '../SignUp/SignUpLabel';
import { useResumeStore } from '../../store/resumeStore';

export const ResumeInfo = () => {
  const { setIntroduction, resume } = useResumeStore();

  return (
    <ElderRegisterLayout title="추가 정보 입력" require={false}>
      <SignUpLabel label="한 줄 소개" />
      <Introduction>
        <Container>
          <span>간단하게 소개해주세요.</span>
          <span>
            오래 근무할 수 있어요, 신체 활동 보조에 자신 있어요,
            <br /> 운전을 잘 해요 등
          </span>
        </Container>
        <Input
          placeholder="*10자 이상 입력해 주세요"
          value={resume.introduction}
          onChange={(e) => setIntroduction(e.target.value)}
        />
        <span style={{ alignSelf: 'flex-end' }}>
          ({resume.introduction.length}/50)
        </span>
      </Introduction>
      <Profile>
        <SignUpLabel label="프로필 사진을 추가해보세요" />
        <InfoText>사진이 있으면 더 많은 관리자가 확인해요.</InfoText>
        <Box>
          <img src="public/icons/profile-light.svg" />
        </Box>
      </Profile>
    </ElderRegisterLayout>
  );
};

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontStyles.bodyMediumL}
`;
const InfoText = styled.span`
  position: relative;
  top: -1.3rem; // ✅ 위로 이동
`;
const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;

  padding: 1.2rem 1.4rem;
  border-radius: 1.3rem;
  background-color: ${({ theme }) => theme.colors.black10};
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontStyles.bodyMediumL}
  span:first-child {
    ${({ theme }) => theme.fontStyles.bodyMediumM}
  }
`;

const Box = styled.div`
  align-self: center;
  width: 20.5rem;
  height: 20.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.3rem;
  border: 0.08rem solid ${(props) => props.theme.colors.black20};
  margin-top: 1.9rem;
  img {
    width: 12.9rem;
    height: 12.9rem;
    fill: ${({ theme }) => theme.colors.mainColor};
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
