import styled from 'styled-components';
import { CenterAddressBox } from '../components/address/AddressBox';

import { useCenterStore } from '../store/centerStore';
import { useSignUpStore } from '../store/signUpStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useModifyCenterStore } from '../store/modifyCenterStore';

export const SearchCenter = () => {
  const { centers, setCenter } = useCenterStore();
  const { setCenterId } = useModifyCenterStore();
  const { updateFormData, step, updateExperienceField, experienceIndex } =
    useSignUpStore();
  const navigate = useNavigate();
  const onClick = (e: string[]) => {
    setCenterId(+e[3]);
    if (step === 2) {
      updateFormData({
        centerAddress: {
          zonecode: e[0],
          roadAddress: e[1],
          jibunAddress: e[2],
          centerId: +e[3],
        },
      });
    }
    if (step === 4) {
      updateExperienceField(experienceIndex, 'center', e[1]);
      updateFormData({
        centerAddress: {
          zonecode: e[0],
          roadAddress: e[1],
          jibunAddress: e[2],
          centerId: +e[3],
        },
      });
    }
    navigate(-1);
  };
  useEffect(() => {
    setCenter([]);
  }, []);
  return (
    <Wrapper>
      {centers.map((i, index) => (
        <div>
          <CenterAddressBox
            key={index}
            centerAddress={i}
            border={false}
            onClick={onClick}
          />
          <Line />
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 3rem;
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black10};
  padding-bottom: 1rem;
`;
