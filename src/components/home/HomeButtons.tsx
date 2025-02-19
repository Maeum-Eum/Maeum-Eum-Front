import styled from 'styled-components';
import { CiBookmark } from 'react-icons/ci';
import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';

interface IButtons {
  leftText: string;
  rightText: string;
  leftFunc: () => void;
  rightFunc: () => void;
  bookmark?: boolean;
}

export const HomeButtons = ({
  leftText,
  rightFunc,
  leftFunc,
  rightText,
  bookmark,
}: IButtons) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmark);
  return (
    <Buttons>
      <WhiteButton
        onClick={() => {
          leftFunc();
          if (leftText === '저장') setIsBookmarked((prev) => !prev);
        }}
      >
        {leftText === '저장' ? (
          isBookmarked ? (
            <FaBookmark
              style={{
                width: '1.4rem',
                height: '1.4rem',
                color: '#371FF0',
              }}
            />
          ) : (
            <CiBookmark
              style={{
                width: '1.4rem',
                height: '1.4rem',
                color: 'rgba(0, 0, 0, 0.8)',
              }}
            />
          )
        ) : null}
        {leftText}
      </WhiteButton>
      <BlueButton onClick={rightFunc}>{rightText}</BlueButton>
    </Buttons>
  );
};

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

const WhiteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 15rem;
  padding: 1.3rem 2rem;
  box-sizing: border-box;
  border-radius: 1.3rem;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.fontStyles.bodyMediumR}
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black60};
  border: 0.08rem solid ${({ theme }) => theme.colors.black40};
`;

const BlueButton = styled.button`
  width: 100%;
  padding: 1.3rem 3.4rem;
  box-sizing: border-box;
  border-radius: 1.3rem;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.mainColor};
  ${({ theme }) => theme.fontStyles.head2B}
  color: #ffffff;
`;
