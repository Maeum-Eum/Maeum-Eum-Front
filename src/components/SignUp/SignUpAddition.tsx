import styled from 'styled-components';
import { Experience } from './Experience';
import { SignUpLabel } from './SignUpLabel';
import { SignUpLayout } from './SignUpLayout';

import { useState } from 'react';

export const SignUpAddition = () => {
  const [cnt, setCnt] = useState(1);
  return (
    <SignUpLayout title="추가 정보 입력" require={false}>
      <SignUpLabel label="경력사항" />
      {Array.from({ length: cnt }).map((_, index) => {
        return <Experience key={index} />;
      })}
      {cnt === 3 ? null : (
        <Add onClick={() => setCnt((cnt) => cnt + 1)}>추가 하기</Add>
      )}
    </SignUpLayout>
  );
};
const Add = styled.div`
  width: 100%;
  align-self: center;
  text-align: center;
  margin-top: 1rem;
  text-decoration: underline;
  ${({ theme }) => theme.fontStyles.head2M}
  cursor: pointer;
`;
