import { create } from 'zustand';

interface FindAccountState {
  step: number;
  activeTab: 'id' | 'password';
  setStep: (step: number) => void;
  setActiveTab: (tab: 'id' | 'password') => void;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;

  
}

export const useFindAccountNavStore = create<FindAccountState>((set) => ({
  step: 1,
  activeTab: 'id',
  setStep: (step) => set({ step }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: Math.max(0, state.step - 1) })),
  resetStep: () => set({ step: 1 }),
}));
