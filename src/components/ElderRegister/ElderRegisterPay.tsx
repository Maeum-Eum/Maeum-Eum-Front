import styled from 'styled-components';
import { Contact2 } from '../contact/Contact2';
import { ElderRegisterLayout } from './ElderRegisterLayout';

export const ElderRegisterPay = () => {
  return (
    <ElderRegisterLayout title="기본 정보 입력" require={true}>
      <Wrapper>
        <Contact2 />
      </Wrapper>
    </ElderRegisterLayout>
  );
};
const Wrapper = styled.div`
height: 50dvh;
`
