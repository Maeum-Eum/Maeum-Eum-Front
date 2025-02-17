import styled from "styled-components"

export const ElderRegisterSubLabel = ({label} : {label: string}) => {
    return <Title>{label}</Title>
}

const Title = styled.div`
  ${({ theme }) => theme.fontStyles.bodyMediumR}
  ${({ theme }) => theme.colors.black80}
  font-weight: 400;
  margin-bottom: 1rem;
  margin-top: 3rem;
`