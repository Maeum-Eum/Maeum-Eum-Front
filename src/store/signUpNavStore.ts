import { create } from 'zustand';

interface SignUpNavState {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
}

export const useSignUpNavStore = create<SignUpNavState>((set) => ({
  step: 1,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: Math.max(0, state.step - 1) })),
}));
