import styled from 'styled-components';

export const Input = styled.input`
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
  cursor: pointer;
  margin-bottom: 0.5rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fontStyles.bodyMediumR};
  &:focus {
    border-color: ${({ theme }) => theme.colors.black60};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.black40}; /* placeholder 텍스트 색상 */
    opacity: 0.6; /* 투명도 조절 */
  }
`;
