import styled from 'styled-components';
import { ButtonElderRegister } from '../components/ButtonElderRegister';

export const ElderAdmin = () => {
  return (
    <Wrapper>
        <ButtonElderRegister />
      <ContentWrapper>
        <ElderContainer>
          <Text>홍길동 어르신</Text>
          <IconContainer>
            <ElderRevise><img src='/icons/revise.svg'/></ElderRevise>
            <ElderSee><img src='/icons/see.svg'/></ElderSee>
          </IconContainer>
        </ElderContainer>
      </ContentWrapper>

        <Line />
      <ContentWrapper>
        <ElderContainer>
          <Text>이순자 어르신</Text>
          <IconContainer>
            <ElderRevise><img src='/icons/revise.svg'/></ElderRevise>
            <ElderSee><img src='/icons/see.svg'/></ElderSee>
          </IconContainer>
        </ElderContainer>
      </ContentWrapper>

      <Line />
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
  ${({theme}) => theme.fontStyles.large2B}
`

const IconContainer = styled.div`
  display: flex;
  gap: 3rem;
`

const ElderRevise = styled.div`
 cursor: pointer;
`

const ElderSee = styled.div`
 cursor: pointer;
`

const Line = styled.div`
width: 100%;
border: 0.1rem solid ${({ theme }) => theme.colors.black10};
`
