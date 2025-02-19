import styled from 'styled-components';
import { useContactStore } from '../store/contactStore';
import { Contact1 } from '../components/contact/Contact1';
import { Contact2 } from '../components/contact/Contact2';
import { Contact3 } from '../components/contact/Contact3';
import { Contact4 } from '../components/contact/Contact4';

export const Contact = () => {
  const { step } = useContactStore();

  return (
    <Wrapper>
      {step === 1 && <Contact1 />}
      {step === 2 && <Contact2 />}
      {step === 3 && <Contact3 />}
      {step === 4 && <Contact4 />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 3.2rem;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontStyles.bodyMediumL}
`;
