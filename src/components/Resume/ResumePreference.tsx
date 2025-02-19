import { ElderRegisterLayout } from '../ElderRegister/ElderRegisterLayout';
import { ElderRegisterSubLabel } from '../ElderRegister/ElderRegisterSubLabel';
import { SelectedButton } from '../ElderRegister/SelectedButton';
import { SignUpLabel } from '../SignUp/SignUpLabel';
import { useResumeStore } from '../../store/resumeStore';

export const ResumePreference = () => {
  const { setPreferredGender, setIsFamilyPreferred, setIsPetPreferred } =
    useResumeStore();

  const handleElderSelect = (elder: string | string[]) => {
    if (typeof elder === 'string') {
      setPreferredGender(elder);
    }
  };

  const handleFamilySelect = (option: string | string[]) => {
    if (typeof option === 'string') {
      const isPreferred = option === '가족이 있어도 괜찮아요';
      setIsFamilyPreferred(isPreferred);
    }
  };

  const handlePetSelect = (option: string | string[]) => {
    if (typeof option === 'string') {
      const isPreferred = option === '있어도 괜찮아요';
      setIsPetPreferred(isPreferred);
    }
  };

  return (
    <ElderRegisterLayout title="추가 정보 입력" require={false}>
      <SignUpLabel label="조금 더 선호하는 항목을 선택해 주세요." />
      <ElderRegisterSubLabel label="요양보호사님의 편의에 딱맞는 어르신을 추천해드릴게요." />

      <SignUpLabel label="어르신 성별" />
      <SelectedButton
        options={['관계 없어요']}
        multiSelect={false}
        onSelect={handleElderSelect}
        hoverColor={{ '관계 없어요': '#371FF0' }}
        maxWidth="100%"
      />
      <SelectedButton
        options={['남성 어르신을 선호해요', '여성 어르신을 선호해요']}
        multiSelect={false}
        onSelect={handleElderSelect}
        hoverColor={{
          '남성 어르신을 선호해요': '#371FF0',
          '여성 어르신을 선호해요': '#371FF0',
        }}
        fontSize="1.4rem"
      />

      <SignUpLabel label="돌봄 시간 중 어르신의 가족" />
      <SelectedButton
        options={['관계 없어요']}
        multiSelect={false}
        onSelect={handleFamilySelect}
        hoverColor={{ '관계 없어요': '#371FF0' }}
        maxWidth="100%"
      />
      <SelectedButton
        options={['가족이 있어도 괜찮아요', '마주치고 싶지 않아요']}
        multiSelect={false}
        onSelect={handleFamilySelect}
        hoverColor={{
          '가족이 있어도 괜찮아요': '#371FF0',
          '마주치고 싶지 않아요': '#371FF0',
        }}
        fontSize="1.4rem"
      />

      <SignUpLabel label="어르신의 반려동물" />
      <SelectedButton
        options={['있어도 괜찮아요', '있으면 힘들어요']}
        multiSelect={false}
        onSelect={handlePetSelect}
        hoverColor={{
          '있어도 괜찮아요': '#371FF0',
          '있으면 힘들어요': '#371FF0',
        }}
        fontSize="1.4rem"
      />
    </ElderRegisterLayout>
  );
};
