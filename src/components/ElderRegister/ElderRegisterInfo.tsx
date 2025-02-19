import { Input } from '../Input';
import { SignUpLabel } from '../SignUp/SignUpLabel';
import { ElderRegisterLayout } from './ElderRegisterLayout';
import { SelectedButton } from './SelectedButton';
import { InputWrapper } from '../SignUp/SignUpLayout';
import { RoundedButton } from '../SignUp/RoundedButton';
import { useElderRegisterStore } from '../../store/elderRegisterStore';

export const ElderRegisterInfo = () => {
  const { setElderData, elder } = useElderRegisterStore();

  return (
    // title  Elder 버전으로 따로 만들기 (필수) 항목 넣어야함
    <ElderRegisterLayout title="기본 정보 입력" require={true}>
      <SignUpLabel label="성함" />
      <Input
        placeholder="성함을 입력해주세요."
        value={elder.name}
        onChange={(e) => setElderData('name', e.target.value)}
      />
      <SignUpLabel label="성별" />
      <SelectedButton
        options={['남성', '여성']}
        multiSelect={false}
        onSelect={(gender) => {
          if (typeof gender === 'string') {
            setElderData('gender', gender === '남성' ? 'male' : 'female');
          }
        }}
        hoverColor={{ 남성: '#5867D7', 여성: '#DF548B' }}
      />
      <SignUpLabel label="생년 월일" />
      <Input
        placeholder="생년월일을 입력해주세요."
        value={elder.birth}
        onChange={(e) => setElderData('birth', e.target.value)}
      />
      <SignUpLabel label="주소" />
      <InputWrapper>
        {' '}
        {/* 검색하기 기능 추가 및 아래 항목에 주소 나올 컴포넌트 생각하기기*/}
        <Input
          placeholder="주소를 입력해주세요."
          value={elder.address}
          onChange={(e) => setElderData('address', e.target.value)}
        />
        <RoundedButton text={'검색하기'} func={() => {}} />
      </InputWrapper>
      <SignUpLabel label="등급" />

      <SelectedButton
        options={['1등급', '2등급', '3등급']}
        multiSelect={true}
        onSelect={(selectedRanks) => {
          if (Array.isArray(selectedRanks)) {
            const mappedRanks = selectedRanks.map((rank) =>
              rank === '인지 지원 등급' ? 6 : parseInt(rank[0], 10)
            );
            setElderData('rank', mappedRanks); // ✅ 배열로 저장
          }
        }}
        hoverColor={{ '1등급': '#371FF0', '2등급': '#371FF0', '3등급': '#371FF0' }}
        fontSize="1.35rem"
        gap="1rem"
      />
      <div style={{ marginTop: '1rem' }}></div>
      <SelectedButton
        options={['4등급', '5등급', '인지 지원 등급']}
        multiSelect={true}
        onSelect={(selectedRanks) => {
          if (Array.isArray(selectedRanks)) {
            const mappedRanks = selectedRanks.map((rank) =>
              rank === '인지 지원 등급' ? 6 : parseInt(rank[0], 10)
            );
            setElderData('rank', mappedRanks); // ✅ 배열로 저장
          }
        }}
        hoverColor={{ '4등급': '#371FF0', '5등급': '#371FF0','인지 지원 등급': '#371FF0' }}
        fontSize="1.35rem"
        gap="1rem"
      />
    </ElderRegisterLayout>
  );
};
