import { useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { RoundedButton } from '../components/SignUp/RoundedButton';
import { SignUpLabel } from '../components/SignUp/SignUpLabel';
import { InputWrapper } from '../components/SignUp/SignUpLayout';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getSocialWorkerMyPage } from '../services/myPage';
import { useModifyCenterStore } from '../store/modifyCenterStore';

export const ModifyCenter = () => {
  const navigate = useNavigate();
  const {
    shortPr,
    hasCar,
    center,
    setShortPr,
    setHasCar,
    setCenter,
    setCenterId,
  } = useModifyCenterStore();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSocialWorkerMyPage = async () => {
      try {
        setLoading(true);
        const res = await getSocialWorkerMyPage();
        setShortPr(res.oneLineIntro);
        setHasCar(res.hasCar);
        setCenter(res.centerName);
        setCenterId(res.centerId);
      } catch (error) {
        console.error('Error fetching social worker info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialWorkerMyPage();
  }, []);
  if (loading) return <></>;
  return (
    <Wrapper>
      <SignUpLabel label={'소속'} />
      <InputWrapper>
        <Input value={center} />
        <RoundedButton
          text="수정하기"
          func={() => navigate('/search-center')}
        />
      </InputWrapper>
      <SignUpLabel label={'목욕차량 소유 여부'} />
      <Options>
        <RadioButton
          $isSelected={hasCar}
          onClick={() => {
            setHasCar(false);
          }}
        >
          <RadioCircle $isSelected={hasCar} />
          <Text isSelected={hasCar}>있음</Text>
        </RadioButton>
        <RadioButton
          $isSelected={!hasCar}
          onClick={() => {
            setHasCar(false);
          }}
        >
          <RadioCircle $isSelected={!hasCar} />
          <Text isSelected={!hasCar}>없음</Text>
        </RadioButton>
      </Options>
      <RowWrapper>
        <SignUpLabel label="센터 등급" />
        <CenterInput value={'A'} disabled={true} />
      </RowWrapper>
      <RowWrapper>
        <SignUpLabel label="운영 기간" />
        <CenterInput value={'17년'} disabled={true} />
      </RowWrapper>
      <SignUpLabel label="한줄 자기소개를 해주세요" />
      <Input
        placeholder="*10자 이상 입력해 주세요"
        maxLength={50}
        value={shortPr}
        onChange={(e) => {
          setShortPr(e.target.value);
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0rem 3rem;
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-align: center;
`;
const CenterInput = styled.input`
  border-radius: 1.3rem;
  border: 0.08rem solid ${({ theme }) => theme.colors.black20};
  background-color: transparent;
  text-align: center;
  width: 100%;
  margin-left: 1rem;
  height: 4rem;
  ${({ theme }) => theme.fontStyles.headingR};
  color: ${({ theme }) => theme.colors.black40};
`;
const Options = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 2rem;
`;

const RadioButton = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const RadioCircle = styled.div<{ $isSelected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0.08px solid #00000033;
  box-shadow: ${({ $isSelected }) =>
    $isSelected ? ' 0 0 0 0.4rem #1F2DF0 inset' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.span<{ isSelected: boolean }>`
  ${({ theme }) => theme.fontStyles.head2M};
  color: ${({ isSelected }) => (isSelected ? '#000' : '#00000066')};
`;
