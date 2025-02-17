import styled from 'styled-components';
const careWorkOptions = [
  '방문 요양',
  '입주 요양',
  '방문 목욕',
  '주야간 보호',
  '요양원',
  '병원',
  '병원 동행',
];
export const Contact1 = () => {
  return (
    <div>
      <ContactTitle>요양보호사님에게 요청할 업무를 선택해주세요</ContactTitle>
      <ContactContent>
        {careWorkOptions.map((opt) => (
          <Select>{opt}</Select>
        ))}
      </ContactContent>
    </div>
  );
};

export const ContactTitle = styled.div`
  padding: 2rem 0;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.black10};
  ${({ theme }) => theme.fontStyles.headingSB}
`;
export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  gap: 2rem;
  row-gap: 1.1rem;
  justify-content: flex-start;
`;

const Select = styled.div`
  border-radius: 1.3rem;
  height: 4.1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.08rem solid ${({ theme }) => theme.colors.black40};
  ${({ theme }) => theme.fontStyles.head2M}
`;
