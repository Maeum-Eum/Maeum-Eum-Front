import styled from 'styled-components';

export const SignUpInput = styled.input`
  width: 100%;
  border: 0.08rem solid ${({ theme }) => theme.colors.black20};
  border-radius: 1.3rem;
  font-size: 1.2rem;
  outline: none;
  text-decoration: none;
  height: 4rem;
  padding-left: 1.3rem;
  background-color: transparent;
  box-sizing: border-box;

  ${({ theme }) => theme.fontStyles.bodyMediumR};
  &:focus {
    //TODO : UI 나온 후 수정 필요
    border-color: ${({ theme }) => theme.colors.color};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.black40}; /* placeholder 텍스트 색상 */
    opacity: 0.6; /* 투명도 조절 */
  }
`;
