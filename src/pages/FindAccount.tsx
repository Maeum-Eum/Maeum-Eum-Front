import { FindAccountLayout } from '../components/FindAccount/FindAccountLayout';
import { FindId } from '../components/FindAccount/FindId';
import { FindIdShow } from '../components/FindAccount/FindIdShow';
import { FindPassword } from '../components/FindAccount/FindPassword';
import { useFindAccountNavStore } from '../store/findAccountStore';

export const FindAccount = () => {
  const { step, activeTab, nextStep } = useFindAccountNavStore();
  return (
    <FindAccountLayout func={nextStep} step={step} activeTab={activeTab}>
      {activeTab === 'id' ? (
        step === 1 ? (
          <FindId />
        ) : (
          <FindIdShow />
        )
      ) : (
        <FindPassword />
      )}
    </FindAccountLayout>
  );
};
