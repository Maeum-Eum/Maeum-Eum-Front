import styled from 'styled-components';
import { ICenter } from '../../services/signup';
import { IAddress } from '../../store/signUpStore';

interface AddressBoxProps {
  centerAddress?: ICenter;
  address?: IAddress;
  onClick?: (arr: string[]) => void;
  border?: boolean;
}

export const AddressBox = ({ address }: AddressBoxProps) => {
  return (
    <Wrapper $border={true}>
      <Row>
        <span>우편번호</span>
        <PostCode>{address!.zonecode}</PostCode>
      </Row>
      <Row>
        <span>구주소</span> <span>{address!.jibunAddress} </span>
      </Row>
      <Row>
        <span>도로명</span>
        <span>{address!.roadAddress}</span>
      </Row>
    </Wrapper>
  );
};
export const CenterAddressBox = ({
  centerAddress,

  onClick,
}: AddressBoxProps) => {
  return (
    <Wrapper
      $border={false}
      onClick={() =>
        onClick!([
          centerAddress?.zipCode ?? '',
          centerAddress?.detailAddress ?? '',
          centerAddress?.centerName ?? '',
          centerAddress?.centerId + '',
        ])
      }
    >
      <Row>
        <span>우편번호</span>
        <PostCode>{centerAddress!.zipCode}</PostCode>
      </Row>
      <Row>
        <span>센터명</span> <span>{centerAddress!.centerName} </span>
      </Row>
      <Row>
        <span>상세주소</span>
        <span>{centerAddress!.detailAddress}</span>
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
