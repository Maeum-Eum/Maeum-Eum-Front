import { create } from 'zustand';

interface AcceptState {
  step: number;
  setStep: (step: number) => void;
}

export const useAcceptStore = create<AcceptState>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
}));
