import { ResumeExperience } from '../components/Resume/ResumeExperience';
import { ResumeGrade } from '../components/Resume/ResumeGrade';
import { ResumeInfo } from '../components/Resume/ResumeInfo';
import { ResumeJobSelect } from '../components/Resume/ResumeJobSelect';
import { ResumeNumber } from '../components/Resume/ResumeNumber';
import { ResumePreference } from '../components/Resume/ResumePreference';
import { ResumeRegionSelect } from '../components/Resume/ResumeRegionSelect';
import { ResumeTask } from '../components/Resume/ResumeTask';
import { ResumeTime } from '../components/Resume/ResumeTime';
import { useResumeStore } from '../store/resumeStore';

export const Resume = () => {
  const { step } = useResumeStore();

  return (
    <>
      {step === 1 && <ResumeJobSelect />}
      {step === 2 && <ResumeNumber />}
      {step === 3 && <ResumeRegionSelect />}
      {step === 4 && <ResumeTime />}
      {step === 5 && <ResumeGrade />}
      {step === 6 && <ResumeTask />}
      {step === 7 && <ResumePreference />}
      {step === 8 && <ResumeExperience />}
      {step === 9 && <ResumeInfo />}
    </>
  );
};
