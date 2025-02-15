import { SignUpStep1 } from '../components/SignUp/SignUpStep1';
import { SignUpSocialWorker } from '../components/SignUp/SignUpSocialWorker';
import { useSignUpStore } from '../store/signUpStore';
import { SignUpCareWorker } from '../components/SignUp/SignUpCareWorker';
import { SignUpAddition } from '../components/SignUp/SignUpAddition';
import { SignUpAddition2 } from '../components/SignUp/SignUpAddition2';

export const SignUp = () => {
  const { step } = useSignUpStore();

  return (
    <>
      {step === 1 && <SignUpStep1 />}
      {step === 2 && <SignUpSocialWorker />}
      {step === 3 && <SignUpCareWorker />}
      {step === 4 && <SignUpAddition />}
      {step === 5 && <SignUpAddition2 />}
    </>
  );
};
