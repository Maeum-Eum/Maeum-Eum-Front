import styled from 'styled-components';
import { IAddress } from '../../store/signUpStore';

interface AddressBoxProps {
  address: IAddress;
  border?: boolean; // ✅ 선택적 props
}

export const AddressBox = ({ address, border = true }: AddressBoxProps) => {
  return (
    <Wrapper $border={border}>
      <Row>
        <span>우편번호</span>
        <PostCode>{address.zonecode}</PostCode>
      </Row>
      <Row>
        <span>구주소</span> <span>{address.roadAddress} </span>
      </Row>
      <Row>
        <span>도로명</span> <span>{address.jibunAddress} </span>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $border: boolean }>`
  margin-top: 1rem;
  border: ${({ theme, $border }) =>
    $border ? `0.08rem solid  ${theme.colors.black60}` : 'none'};
  border-radius: 1.3rem;
  padding: 2rem 1.3rem;
  gap: 3rem;
  display: grid;
  ${({ theme }) => theme.fontStyles.bodyMediumR}
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 7.7rem 1fr;
  align-items: center;
  :first-child {
    color: ${({ theme }) => theme.colors.black40};
  }
  :last-child {
    ${({ theme }) => theme.fontStyles.bodyMediumSB}
  }
`;

const PostCode = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
`;
