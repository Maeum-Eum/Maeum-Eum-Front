import styled from "styled-components"

export const CheckboxButton = ({label} : {label: string}) => {
    return <CheckboxContainer><input type="checkbox" />{label}</CheckboxContainer>
}

const CheckboxContainer = styled.div`
      ${({ theme }) => theme.fontStyles.bodyMediumL}
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-decoration: underline;
  font-weight:400;
  font-size: 1.2rem;
`