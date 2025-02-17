import styled from 'styled-components';
import { ContactTitle } from './Contact1';
import { HomeDropdown } from '../home/HomeDropdown';
import { Input } from '../Input';

export const Contact2 = () => {
  return (
    <div>
      <ContactTitle>급여에 대해 알려주세요</ContactTitle>
      <Content>
        <Border>
          <HomeDropdown items={['시급', '건별', '일급', '월급']} />
        </Border>
        <Wage>
          <Input />
          <span>*해당 요양 보호사는 13000원을 희망해요</span>
        </Wage>
      </Content>
    </div>
  );
};

const Content = styled.div`
  display: flex;
  gap: 1rem;
`;
const Border = styled.div`
  white-space: nowrap;

  height: 4rem;
  width: 9.3rem;
  border-radius: 1.3rem;
  border: 0.08rem solid ${({ theme }) => theme.colors.black40};
`;

const Wage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  span {
    margin-left: 1.8rem;
    ${({ theme }) => theme.fontStyles.bodySmallL};
    color: ${({ theme }) => theme.colors.sColor4};
  }
`;
