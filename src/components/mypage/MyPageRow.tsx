import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

export interface IMyPageRow {
  icon: any;
  text: string;
  onClick: () => void;
}

export const MyPageRow = (li: IMyPageRow, num: number) => {
  return (
    <Row key={li.text} onClick={li.onClick}>
      <Section>
        {li.icon}
        <span>{li.text}</span>
      </Section>
      <div>
        <span>{num}</span>
        <IoIosArrowForward
          style={{
            width: '1.4rem',
            height: '1.4rem',
            color: 'rgba(0, 0, 0, 0.4)',
            marginLeft: '1rem',
          }}
        />
      </div>
    </Row>
  );
};

const Section = styled.div`
  color: ${(props) => props.theme.colors.black};
  :first-child {
    width: 2rem;
    height: 2rem;
    margin-right: 1.2rem;
    color: ${(props) => props.theme.colors.mainColor};
  }
`;
const Row = styled.div`
  padding: 2rem 0;
  &:not(:last-child) {
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.black10};
  }
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.mainColor};
  span {
    ${(props) => props.theme.fontStyles.large2SB};
    border-radius: 1.3rem;
  }
`;
