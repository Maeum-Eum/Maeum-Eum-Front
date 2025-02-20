import styled from 'styled-components';
import { PeopleInfoContainer } from '../components/home/PeopleInfoContainer';
import { HomeButtons } from '../components/home/HomeButtons';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { Modal } from '../components/Modal';
import { getMainList } from '../services/home';
import { postRejectMatching } from '../services/contact';
import { useCareGiverHomeStore } from '../store/careGiverHomeStore';
import { useHomeOptionStoreStore } from '../store/homeOptionStore';

import { sampleMainList } from '../components/home/DynamicHome';

export const HomeCareWorker = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const { data, setData } = useCareGiverHomeStore();
  const { range, order, role } = useHomeOptionStoreStore();

  useEffect(() => {
    if (!role) return;
    const getHome = async () => {
      setLoading(true);
      try {
        const res = await getMainList({ range: range, sort: order, page: '1' });
        setData(res);
      } catch (error) {
        setData(sampleMainList);
        console.error('데이터 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    getHome();
  }, [range, order, role]);
  if (loading) return <></>;

  return data ? (
    <Wrapper>
      {data.content.length === 0 ? (
        <Empty>아직 연락이 없어요</Empty>
      ) : (
        data.content.map((item) => (
          <div key={item.contactId}>
            <ContentWrapper>
              <PeopleInfoContainer
                contactId={item.contactId}
                isCare={true}
                title={item.title}
                createdAt={item.createdAt}
                wage={item.wage}
                negotiable={item.negotiable}
                center={item.center}
                tags={[item.daily, item.mobility, item.meal, item.toileting]}
                elderId={null}
              />
              <HomeButtons
                leftFunc={() => {
                  setModalOpen(true);
                }}
                rightFunc={() => navigate(`/accept/${item.contactId}`)}
                leftText="거절하기"
                rightText="수락하기"
              />
            </ContentWrapper>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
              title={item.title}
              content="거절할 경우<br/>영구적으로 삭제됩니다. <br/>그래도 거절하시겠습니까?"
              left="취소"
              right="확인"
              onConfirm={async () => {
                await postRejectMatching(item.contactId);
                setModalOpen(false);
              }}
            />
          </div>
        ))
      )}
    </Wrapper>
  ) : (
    <></>
  );
};
const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.5rem;
`;

export const Dropdowns = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  position: sticky;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 3.5rem;
  gap: 0;
  max-width: 440px;
  width: 100%;
  z-index: 1000;
  border: 0.1rem solid ${(props) => props.theme.colors.black10};
`;

export const Empty = styled.div`
  color: ${(props) => props.theme.colors.black40};
  ${(props) => props.theme.fontStyles.large2B};
`;
