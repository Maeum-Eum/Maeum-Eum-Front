import { ElderRegisterInfo } from "../components/ElderRegister/ElderRegisterInfo";
import { ElderRegisterReference } from "../components/ElderRegister/ElderRegisterReference";
import { ElderRegisterSchedule } from "../components/ElderRegister/ElderRegisterSchedule";
import { ElderRegisterService } from "../components/ElderRegister/ElderRegisterService";
import { useSignUpNavStore } from "../store/signUpNavStore"

export const ElderRegister = () => {
    const {step} = useSignUpNavStore();
    return (
        <>
            {step === 1 && <ElderRegisterInfo />}
            {step === 2 && <ElderRegisterSchedule />}
            {step === 3 && <ElderRegisterService />}
            {step === 4 && <ElderRegisterReference />}
        </>
    )
}