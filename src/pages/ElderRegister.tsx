import { ElderRegisterInfo } from "../components/ElderRegister/ElderRegisterInfo";
import { ElderRegisterReference } from "../components/ElderRegister/ElderRegisterReference";
import { ElderRegisterSchedule } from "../components/ElderRegister/ElderRegisterSchedule";
import { ElderRegisterService } from "../components/ElderRegister/ElderRegisterService";
import { useElderRegisterStore } from "../store/elderRegisterStore";


export const ElderRegister = () => {
    const {step} = useElderRegisterStore();
    return (
        <>
            {step === 1 && <ElderRegisterInfo />}
            {step === 2 && <ElderRegisterSchedule />}
            {step === 3 && <ElderRegisterService />}
            {step === 4 && <ElderRegisterReference />}
        </>
    )
}