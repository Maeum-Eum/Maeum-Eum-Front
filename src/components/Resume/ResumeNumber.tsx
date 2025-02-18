import { ElderRegisterLayout } from "../ElderRegister/ElderRegisterLayout"
import { Input } from "../Input"
import { SignUpLabel } from "../SignUp/SignUpLabel"

export const ResumeNumber = () => {
    return (
        <ElderRegisterLayout title="기본 정보 입력" require={true}>
            <SignUpLabel label="요양 보호사 자격증 번호를 알려주세요"/>
            <Input placeholder="숫자를 입력해주세요."/>

        </ElderRegisterLayout>
    )
}