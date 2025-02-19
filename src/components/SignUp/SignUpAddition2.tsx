import styled from 'styled-components';
import { Input } from '../Input';
import { SignUpLabel } from './SignUpLabel';
import { SignUpLayout } from './SignUpLayout';

import { useSignUpStore } from '../../store/signUpStore';
import { useRef, useState } from 'react';

export const SignUpAddition2 = () => {
  const { formData, updateFormData, setFile } = useSignUpStore();
  const [preview, setPreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
      setFile(selectedFile);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <SignUpLayout title="추가 정보 입력" require={false}>
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
          value={formData.introduction}
          onChange={(e) => updateFormData({ introduction: e.target.value })}
        />
        <span style={{ alignSelf: 'flex-end' }}>
          ({formData.introduction.length}/50)
        </span>
      </Introduction>
      <Profile>
        <SignUpLabel label="프로필 사진을 추가해보세요" />
        <InfoText>사진이 있으면 더 많은 관리자가 확인해요.</InfoText>
        <Photo>
          {preview ? (
            <PreviewContainer>
              <PreviewImage src={preview} alt="미리보기" />
            </PreviewContainer>
          ) : (
            <>
              <Box>
                <img src="public/icons/profile-light.svg" />
              </Box>
              <HiddenInput
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </>
          )}
          <CustomButton onClick={handleButtonClick}>파일 선택</CustomButton>
        </Photo>
      </Profile>
    </SignUpLayout>
  );
};
const PreviewContainer = styled.div`
  align-self: center;
  width: 20.5rem;
  height: 20.5rem;
  border-radius: 1.3rem;
  border: 0.08rem solid ${(props) => props.theme.colors.black20};
  margin-top: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PreviewImage = styled.img`
  align-self: center;
  width: 100%;
  height: 100%;
  border-radius: 1.3rem;
`;

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

const Box = styled.span`
  align-self: center;
  width: 20.5rem;
  height: 20.5rem;
  border-radius: 1.3rem;
  border: 0.08rem solid ${(props) => props.theme.colors.black20};
  margin-top: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Photo = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HiddenInput = styled.input`
  display: none; /* 기본 파일 선택 버튼 숨김 */
`;
const CustomButton = styled.button`
  margin-top: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  border: 0.1rem solid ${(props) => props.theme.colors.mainColor};
  color: ${(props) => props.theme.colors.mainColor};
  ${({ theme }) => theme.fontStyles.bodyMediumM}
  padding: 10px 40px;
  border-radius: 5px;
  cursor: pointer;
`;
