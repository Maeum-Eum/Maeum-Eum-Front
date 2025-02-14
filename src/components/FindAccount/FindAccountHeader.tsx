import { useNavigate } from "react-router-dom";
import { useFindAccountNavStore } from "../../store/findAccountStore"
import styled from "styled-components";

export const FindAccountHeader = () => {
    const { step, prevStep} = useFindAccountNavStore();

    const navigate = useNavigate();

    return (
        <HeaderWrapper>
            <BackIcon onClick={() => (step == 1 ? navigate(-1) : prevStep())}>
                <img src="src/assets/icons/back.svg"/>
            </BackIcon>
            아이디 / 비밀번호 찾기
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    position: sticky;
    width: 100%;
    display: flex;
    justify-content: center;
    ${({theme}) => theme.fontStyles.headingB}
    margin-top: 4.0rem;
    align-items: center;
    height: 7rem;
`

const BackIcon = styled.button `
    position: absolute;
    left: 3rem;
    background: none;
    border: none;
    display: flex;
    align-items:center;
    cursor: pointer;
    img {
    width: 1.4rem;
    height: 1.4rem;
    }
`