import styled from 'styled-components';
import { SignUpInput } from './SignUpInput';
import { SignUpLabel } from './SignUpLabel';
import { SignUpLayout } from './SignUpLayout';
import { useNavigate } from 'react-router';

export const SignUpAddition = () => {
  const navigate = useNavigate();
  return (
    <SignUpLayout func={() => navigate('/welcome')} title="추가 정보 입력">
      <SignUpLabel label="경력사항" />
      <SignUpInput placeholder="" />
      <SignUpLabel label="자신있는 지원사항" />
      <SignUpInput placeholder="숫자만 입력해주세요" />
      <SignUpLabel label="한 줄 소개" />

      <Container>
        <span>구체적인 장점같은 내용을 알려주세요.</span>
        <span>
          오래 근무할 수 있어요, 신체 활동 보조에 자신 있어요,
          <br /> 운전을 잘 해요 등
        </span>
      </Container>
      <SignUpInput placeholder="*10자 이상 입력해 주세요" />
    </SignUpLayout>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;

  padding: 1.2rem 1.4rem;
  border-radius: 1.3rem;
  background-color: ${({ theme }) => theme.colors.black5};
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontStyles.bodyMediumR}
  span:first-child {
    ${({ theme }) => theme.fontStyles.bodyMediumM}
  }
`;
