import styled from 'styled-components';
import { formatDate, formatWage } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

export interface IPeopleInfoContainer {
  isCare: boolean;
  border?: boolean;
  title: string;
  center: string;
  createdAt?: string;
  wage: number;
  negotiable: boolean;
  tags: boolean[];
  contactId: number | null;
  elderId: number | null;
  positions?: string[];
}
const work = ['일상', '이동', '식사', '배변'];
export const PeopleInfoContainer = ({
  isCare,
  border = true,
  title,
  center,
  createdAt,
  wage,
  negotiable,
  tags,
  contactId,
}: IPeopleInfoContainer) => {
  const navigate = useNavigate();
  return (
    <Wrapper
      $border={border}
      onClick={() => {
        if (contactId) {
          navigate(`/detail/elder/contact/${contactId}`);
        }
      }}
    >
      <SubInfo>
        {isCare
          ? createdAt
            ? `${center}-${formatDate(createdAt)}`
            : `${center}`
          : createdAt && `${formatDate(createdAt)} 등록`}
        {isCare ? null : <img src="public/icons/certificate.svg" />}
      </SubInfo>

      <Info>{title}</Info>
      {wage === 0 ? (
        <></>
      ) : (
        <Wage>
          <span>시급 {formatWage(wage)}</span>
          <span> {negotiable ? '(협의가능)' : ''}</span>
        </Wage>
      )}
      <Tags>{tags.map((t, index) => t && <Tag>{work[index]}</Tag>)}</Tags>
    </Wrapper>
  );
};

export const RoundedPeopleInfo = ({
  isCare,
  title,
  center,
  createdAt,
  wage,
  negotiable,
  tags,
  elderId,
  positions,
}: IPeopleInfoContainer) => {
  const navigate = useNavigate();
  return (
    <RoundedWrapper
      onClick={() => {
        if (elderId) navigate(`/detail/elder/${elderId}`);
      }}
    >
      <SubInfo>
        {isCare
          ? createdAt
            ? `${center}-${formatDate(createdAt)}`
            : `${center}`
          : createdAt && `${formatDate(createdAt)} 등록`}
        {isCare ? null : <img src="public/icons/certificate.svg" />}
      </SubInfo>

      <Info>{title}</Info>
      <Wage>
        <span>시급 {formatWage(wage)}</span>
        <span> {negotiable ? '(협의가능)' : ''} </span>
      </Wage>

      <Tags>
        {positions
          ? positions.map((p) => <Tag>{p}</Tag>)
          : tags.map((t, index) => t && <Tag>{work[index]}</Tag>)}
      </Tags>
    </RoundedWrapper>
  );
};
const RoundedWrapper = styled.div`
  padding: 1.1rem 1.5rem;
  border: 0.05rem solid ${({ theme }) => theme.colors.black10};
  border-radius: 1.5rem;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div<{ $border: boolean }>`
  padding-left: ${({ $border }) => ($border ? '2rem' : '0')};

  border-left: ${({ $border, theme }) =>
    $border ? `0.5rem solid ${theme.colors.mainColor}` : 'none'};
`;

const SubInfo = styled.div`
  ${({ theme }) => theme.fontStyles.bodyMediumR}
  color: ${({ theme }) => theme.colors.black40};
  margin-bottom: 1rem;
  display: inline-flex;
  align-items: center;
  img {
    width: 1.3rem;
    height: 1.6rem;
    margin-left: 0.5rem;
  }
`;
const Info = styled.div`
  ${({ theme }) => theme.fontStyles.head2B}
`;

const Wage = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.black10};
  ${({ theme }) => theme.fontStyles.head2B}
  color:${({ theme }) => theme.colors.mainColor};
  :last-child {
    ${({ theme }) => theme.fontStyles.bodyMediumR}
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.colors.black40};
  }
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
`;
const Tag = styled.div`
  padding: 0.6rem 0.8rem;
  background-color: rgba(55, 31, 240, 0.15);
  border-radius: 1.3rem;
  text-align: center;
  ${({ theme }) => theme.fontStyles.bodyMediumR}
  color:${({ theme }) => theme.colors.black80};
`;

export const PeopleBookmarkContainer = ({
  isCare,
  title,

  positions,
}: Partial<IPeopleInfoContainer>) => {
  return (
    <Wrapper $border={false}>
      <SubInfo>
        {isCare ? null : <img src="public/icons/certificate.svg" />}
      </SubInfo>

      <BookmarkInfo>{title}</BookmarkInfo>
      <BookmarkTags>
        {positions!.map((p) => (
          <Tag>{p}</Tag>
        ))}
      </BookmarkTags>
    </Wrapper>
  );
};
const BookmarkInfo = styled.div`
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black10};
  ${({ theme }) => theme.fontStyles.head2B}
`;
const BookmarkTags = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
`;
