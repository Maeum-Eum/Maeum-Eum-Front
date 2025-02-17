import styled from "styled-components"

interface FindAccountFooterProps{
    activeTab: "id" | "password";
    nextStep: () => void;
}

export const FindAccountFooter = ({ activeTab,nextStep }: FindAccountFooterProps) => {
    const buttonText = activeTab === "id" ? "아이디 찾기" : "비밀번호 변경하기"
    
    return (
        <Wrapper>
            <Button onClick={nextStep}>{buttonText}</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
     border-top: 0.5rem solid ${({ theme }) => theme.colors.black5};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 3.3rem;
  padding-bottom: 5.5rem;
  position: sticky;
  bottom: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
`

const Button = styled.button`
  bottom: 5.5rem;
  width: 20.7rem;
  padding: 1.3rem 0rem;
  box-sizing: border-box;
  border-radius: 1.3rem;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.color};
  ${({ theme }) => theme.fontStyles.headingB}
  color: #ffffff;
`;
