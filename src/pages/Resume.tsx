import { JobRoundedButton } from '../components/Resume/JobRoundedButton';
import { ResumeLayout } from '../components/Resume/ResumeLayout';
import { useSignUpNavStore } from '../store/signUpNavStore';

export const Resume = () => {
  const { nextStep } = useSignUpNavStore();
  return (
    <ResumeLayout func={nextStep}>
      <JobRoundedButton text={'방문요양'} />
      <JobRoundedButton text={'방문요양'} />
      <JobRoundedButton text={'방문요양'} />
      <JobRoundedButton text={'방문요양'} />
      <JobRoundedButton text={'방문요양'} />
      <JobRoundedButton text={'방문요양'} />
      <JobRoundedButton text={'방문요양'} />
    </ResumeLayout>
  );
};
