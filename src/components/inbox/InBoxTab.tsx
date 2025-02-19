import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  getCareGiverInbox,
  getCareGiverOutGoingBox,
} from '../../services/myPage';
import { useInboxStore } from '../../store/inboxStore';
import { sampleMainList } from '../home/DynamicHome';
import { useOutGoingBoxStore } from '../../store/outGoingBox';

export const InBoxTab = ({ isOut }: { isOut: boolean }) => {
  const [loading, setLoading] = useState(false);
  const { setData, index, setIndex } = useInboxStore();
  const { setoutGoingData } = useOutGoingBoxStore();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (isOut) {
          const response = await getCareGiverOutGoingBox({
            tab: index === 0 ? 'pending' : 'approved',
            page: 0,
          });
          setoutGoingData(response);
        } else {
          const response = await getCareGiverInbox({
            tab: index === 0 ? 'pending' : 'approved',
            page: 0,
          });
          setData(response);
        }
      } catch (error) {
        console.error('API 요청 실패:', error);
        setData(sampleMainList); //TODO API 요청이 실패했을 경우에만 샘플 데이터 사용
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isOut, index]);
  if (loading) return <></>;

  return (
    <Wrapper>
      <Tap $index={index === 0} onClick={() => setIndex(0)}>
        대기
      </Tap>
      <Tap $index={index === 1} onClick={() => setIndex(1)}>
        수락
      </Tap>
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
    $index ? theme.colors.background : theme.colors.black10};
  &:first-child {
    border-right: 0.1rem solid ${(props) => props.theme.colors.black10};
  }
  text-align: center;
  ${(props) => props.theme.fontStyles.head2SB};
`;
