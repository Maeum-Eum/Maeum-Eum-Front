import { ResumeExperience } from '../components/Resume/ResumeExperience';
import { ResumeGrade } from '../components/Resume/ResumeGrade';
import { ResumeInfo } from '../components/Resume/ResumeInfo';
import { ResumeJobSelect } from '../components/Resume/ResumeJobSelect';
import { ResumeNumber } from '../components/Resume/ResumeNumber';
import { ResumePhoto } from '../components/Resume/ResumePhoto';
import { ResumePreference } from '../components/Resume/ResumePreference';
import { ResumeRegionSelect } from '../components/Resume/ResumeRegionSelect';
import { ResumeTask } from '../components/Resume/ResumeTask';
import { ResumeTime } from '../components/Resume/ResumeTime';
import { useElderRegisterStore } from '../store/elderRegisterStore';

export const Resume = () => {
  const { step } = useElderRegisterStore();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ResumeJobSelect />;
      case 2:
        return <ResumeNumber />;
      case 3:
        return <ResumeRegionSelect />;
      case 4:
        return <ResumeTime />;
      case 5:
        return <ResumeGrade />;
      case 6:
        return <ResumeTask />;
      case 7:
        return <ResumePreference />;
      case 8:
        return <ResumeExperience />;
      case 9:
        return <ResumeInfo />;
      case 10:
        return <ResumePhoto />;
      default:
        return <ResumeJobSelect />;
    }
  };

  return renderStep();
};
