import styled from 'styled-components';
import { CenterAddressBox } from '../components/address/AddressBox';

import { useCenterStore } from '../store/centerStore';

export const SearchCenter = () => {
  const { centers } = useCenterStore();
  return (
    <Wrapper>
      <CenterList>
        {centers.map((i, index) => (
          <div>
            <CenterAddressBox key={index} centerAddress={i} />
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
