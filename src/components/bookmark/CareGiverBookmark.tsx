import { useEffect, useState } from 'react';
import { BlankPage } from '../BlankPage';
import { getBookmarkElders, IBookMarkElder } from '../../services/myPage';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PeopleInfoContainer } from '../home/PeopleInfoContainer';

export const CareGiverBookmark = () => {
  const [data, setData] = useState<IBookMarkElder>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const res = await getBookmarkElders(0);
        setData(res);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <></>;
  if (data === undefined || data === null || data.content.length === 0)
    return <BlankPage text={'저장한 내역이 없어요'}></BlankPage>;

  return (
    <Wrapper>
      {data?.content.map((item) => (
        <Container>
          <PeopleInfoContainer
            isCare={true}
            title={item.title}
            wage={item.wage}
            negotiable={item.negotiable}
            center={item.center}
            tags={[
              item.daily ?? true,
              item.mobility ?? true,
              item.meal ?? true,
              item.toileting ?? true,
            ]}
            contactId={null}
            elderId={null}
          />
          {
            <Button
              onClick={() => {
                navigate(`/detail/elder/${item.elderId}?done=true`);
              }}
            >
              자세히 보기
            </Button>
          }
        </Container>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  padding: 0rem 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
`;
const Button = styled.button`
  padding: 1rem 0rem;
  box-sizing: border-box;
  border-radius: 1.3rem;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.mainColor};
  ${({ theme }) => theme.fontStyles.headingB}
  color: #ffffff;
`;
