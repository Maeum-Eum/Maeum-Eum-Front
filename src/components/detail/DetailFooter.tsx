// src/components/footer/FooterActions.tsx

import { useNavigate, useParams, useSearchParams } from 'react-router';
import { HomeButtons } from '../home/HomeButtons';
// Footer 스타일을 따로 정리했다면 import
import { postContactBookmark, postElderBookmark } from '../../services/contact';
import styled from 'styled-components';

export const FooterForDetailContactElder = () => {
  const { contactId } = useParams();
  const [searchParams] = useSearchParams();
  const done = searchParams.get('done');
  const navigate = useNavigate();

  if (done === 'true') return null;

  return (
    <Wrapper>
      <HomeButtons
        leftFunc={async () => {
          await postContactBookmark(+contactId!);
        }}
        rightFunc={() => navigate('/accept')}
        leftText="저장"
        rightText="수락하기"
      />
    </Wrapper>
  );
};

export const FooterForDetailElder = () => {
  const { elderId } = useParams();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <HomeButtons
        leftFunc={async () => {
          await postElderBookmark(+elderId!);
        }}
        rightFunc={() => navigate(`/apply/${elderId}`)}
        leftText="저장"
        rightText="지원하기"
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border-top: ${(props) => `0.5rem solid ${props.theme.colors.black5}`};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 13rem;
  background-color: ${({ theme }) => theme.colors.background};
`;
