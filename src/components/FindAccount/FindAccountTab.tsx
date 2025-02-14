import styled from 'styled-components';
import { useFindAccountNavStore } from '../../store/findAccountStore';

export const FindAccountTab = () => {
  const { activeTab, setActiveTab } = useFindAccountNavStore();
  return (
    <Wrapper>
      <TapContainer>
        <Tap active={activeTab === 'id'} onClick={() => setActiveTab('id')}>
          아이디 찾기
        </Tap>
        <Tap
          active={activeTab === 'password'}
          onClick={() => setActiveTab('password')}
        >
          비밀번호 찾기
        </Tap>
        <Underline position={activeTab === 'id' ? 0 : 1} />
      </TapContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const TapContainer = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
`;

const Tap = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 0.75rem;
  text-align: center;
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  border: none;
${({theme}) => theme.fontStyles.bodyMediumM}
  background-color: transparent;
  cursor: pointer;
  color: ${({ active }) => (active ? '#371FF0' : '#aaa')};
  transition: color 0.3s ease-in-out;
`;

const Underline = styled.div<{ position: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 3px;
  background-color:#371FF0;
  transition: transform 0.3s ease-in-out; /* 부드러운 슬라이드 전환 */
  transform: translateX(${({ position }) => position * 100}%);
`;
