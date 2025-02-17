import styled from 'styled-components';
import { AddressBox } from '../components/address/AddressBox';
import { IAddress } from '../store/signUpStore';

//TODO: 실제 센터 주소 불러오기
const sampleAddress: IAddress = {
  roadAddress: '서울특별시 강남구 테헤란로 123',
  jibunAddress:
    '서울특별시 마포구 서교동 399-1 테스트 빌딩서울특별시 마포구 어울마당로5길 41 (서교동)',
  zonecode: '06164',
};

const AddressList = [
  sampleAddress,
  sampleAddress,
  sampleAddress,
  sampleAddress,
  sampleAddress,
];
export const SearchCenter = () => {
  return (
    <Wrapper>
      <CenterList>
        {AddressList.map((i, index) => (
          <div>
            <AddressBox key={index} address={i} border={false} />
            <Line />
          </div>
        ))}
      </CenterList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 3rem;
`;

const CenterList = styled.div``;
const Line = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black10};
  padding-bottom: 1rem;
`;
