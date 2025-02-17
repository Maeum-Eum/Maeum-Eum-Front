import { create } from 'zustand';

interface ContactState {
  step: number;
  setStep: (step: number) => void;
}

export const useContactStore = create<ContactState>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
}));
