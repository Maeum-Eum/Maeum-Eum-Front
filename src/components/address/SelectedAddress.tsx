import styled from 'styled-components';
import { IAddress } from '../../store/signUpStore';

export const SelectedAddress = (address: IAddress) => {
  return (
    <Wrapper>
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

const Wrapper = styled.div`
  margin-top: 1rem;
  border: 0.08rem solid ${({ theme }) => theme.colors.black60};
  border-radius: 1.3rem;
  padding: 2rem 1.3rem;
  gap: 3rem;
  display: grid;
  ${({ theme }) => theme.fontStyles.bodyMediumR}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  :first-child {
    width: 7.7rem;
    color: ${({ theme }) => theme.colors.black40};
  }
  :last-child {
    ${({ theme }) => theme.fontStyles.bodyMediumSB}
  }
`;

const PostCode = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
`;
