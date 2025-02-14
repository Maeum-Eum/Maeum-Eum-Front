import styled from "styled-components"
import { SignUpHeader } from "../SignUp/SignUpHeader"
import { SignUpFooter } from "../SignUp/SignUpFooter"
import { ReactNode } from "react"

interface SignUpLayoutProps {
    children: ReactNode;
    func: () => void;
}

export const ResumeLayout = ({children, func} : SignUpLayoutProps) => {
    <Wrapper>
        <SignUpHeader />
        <Content>
            {children}
        </Content>
        <SignUpFooter nextStep={func}/>
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    overflow: hidden;
`

const Content = styled.div `
    padding: 0 3rem;
    box-sizing: border-box;
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 7rem;
`