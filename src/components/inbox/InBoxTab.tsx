import styled from 'styled-components';

export const InBoxTab = ({ index }: { index: number }) => {
  return (
    <Wrapper>
      <Tap $index={index === 0}>대기</Tap>
      <Tap $index={index === 1}>수락</Tap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 0.1rem solid ${(props) => props.theme.colors.black10};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Tap = styled.div<{ $index: boolean }>`
  padding: 0.8rem 0;
  background-color: ${({ $index, theme }) =>
    $index ? theme.colors.black10 : theme.colors.background};
  &:first-child {
    border-right: 0.1rem solid ${(props) => props.theme.colors.black10};
  }
  text-align: center;
  ${(props) => props.theme.fontStyles.head2SB};
`;
