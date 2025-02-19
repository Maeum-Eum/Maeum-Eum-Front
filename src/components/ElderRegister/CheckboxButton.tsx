import styled from "styled-components"
import { useElderRegisterStore } from "../../store/elderRegisterStore";

export const CheckboxButton = ({label, checked} : {label: string; checked:boolean}) => {
    const { setElderData, elder} = useElderRegisterStore();

    const handleNegotiable = () => {
        setElderData('negotiable', !elder.negotiable);
      };

    return <CheckboxContainer onClick={handleNegotiable}>{checked} {label}</CheckboxContainer>
}

const CheckboxContainer = styled.div`
      ${({ theme }) => theme.fontStyles.bodyMediumL}
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-decoration: underline;
  font-weight:400;
  font-size: 1.2rem;
`