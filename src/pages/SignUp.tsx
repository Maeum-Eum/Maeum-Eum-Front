import { SignUpStep1 } from '../components/SignUp/SignUpStep1';
import { SignUpSocialWorker } from '../components/SignUp/SignUpSocialWorker';
import { useSignUpNavStore } from '../store/signUpNavStore';
import { SignUpCareWorker } from '../components/SignUp/SignUpCareWorker';
import { SignUpAddition } from '../components/SignUp/SignUpAddition';

export const SignUp = () => {
  const { step } = useSignUpNavStore();

  return (
    <>
      {step === 1 && <SignUpStep1 />}
      {step === 2 && <SignUpSocialWorker />}
      {step === 3 && <SignUpCareWorker />}
      {step === 4 && <SignUpAddition />}
    </>
  );
};
