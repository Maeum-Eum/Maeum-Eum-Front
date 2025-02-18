import { useState } from "react"
import { ElderRegisterLayout } from "../ElderRegister/ElderRegisterLayout"
import { SelectedButton } from "../ElderRegister/SelectedButton"
import { SignUpLabel } from "../SignUp/SignUpLabel"

export const ResumeJobSelect = () => {
    const [ ,setSelectedRegions] = useState<string[]>([]);
    const [, setSelectedEdu] = useState<string>('');
   
    const handleJob = (job: string | string[]) => {
        if (Array.isArray(job)) {
          setSelectedRegions(job);
        }
      };

      const handleEduSelect = (edu: string | string[]) => {
        if (typeof edu === 'string') {
          setSelectedEdu(edu);
        }
      };
    
    return (
        <ElderRegisterLayout title="기본 정보 입력" require={true}>
            <SignUpLabel label="찾고 있는 일자리를 모두 선택해 주세요."/>
            <SelectedButton 
            options={['방문 요양', '입주 요양']}
            multiSelect={true}
            onSelect={handleJob}
            hoverColor={{"방문 요양" : "#371FF0","입주 요양" : "#371FF0"}}
            />
             <SelectedButton 
            options={[  '요양원', '병원']}
            multiSelect={true}
            onSelect={handleJob}
            hoverColor={{"요양원" : "#371FF0","병원" : "#371FF0"}}
            />
             <SelectedButton 
            options={['병원 동행']}
            multiSelect={true}
            onSelect={handleJob}
            hoverColor={{"병원 동행" : "#371FF0"}}
            />
            <SignUpLabel label="치매 교육을 이수하셨나요?"/>
            <SelectedButton 
            options={['이수했어요', '이수하지 않았어요']}
            multiSelect={false}
            onSelect={handleEduSelect}
            hoverColor={{"이수했어요" : "#371FF0","이수하지 않았어요" : "#371FF0"}}
            />
        </ElderRegisterLayout>
    )
}