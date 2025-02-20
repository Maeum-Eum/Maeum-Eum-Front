import styled from 'styled-components';
import { ButtonElderRegister } from '../components/ButtonElderRegister';
import { useEffect, useState } from 'react';
import { useManagerHomeStore } from '../store/managerHomeStore';
import { getElderList } from '../services/home';

export const ElderAdmin = () => {
  const [loading, setLoading] = useState(false);
  const { setElderList, elderList } = useManagerHomeStore();
  useEffect(() => {
    const getElder = async () => {
      setLoading(true);
      try {
        const elders = await getElderList();
        setElderList(elders);
      } catch (error) {
        console.error('데이터 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    getElder();
  }, []);
  if (loading) return <></>;
  return (
    <Wrapper>
      <ButtonElderRegister />
      {elderList.map((item) => (
        <>
          <ContentWrapper>
            <ElderContainer>
              <Text>{item.elderName}</Text>
              <IconContainer>
                <ElderRevise>
                  <img src="/icons/revise.svg" />
                </ElderRevise>
                <ElderSee>
                  <img src="/icons/see.svg" />
                </ElderSee>
              </IconContainer>
            </ElderContainer>
          </ContentWrapper>

          <Line />
        </>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.5rem;
  justify-content: center;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
`;

const ElderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Text = styled.div`
  ${({ theme }) => theme.fontStyles.large2B}
`;

const IconContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const ElderRevise = styled.div`
  cursor: pointer;
`;

const ElderSee = styled.div`
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.colors.black10};
`;
