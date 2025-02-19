import { create } from 'zustand';

interface AcceptState {
  step: number;
  setStep: (step: number) => void;
  phone: string;
  message: string;
  setPhone: (phone: string) => void;
  setMessage: (message: string) => void;
  title: string;
  setTitle: (title: string) => void;
}

export const useAcceptStore = create<AcceptState>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
  phone: '',
  message: '',
  title: '',
  setTitle: (title) => set({ title }),

  setPhone: (phone) => set({ phone }),
  setMessage: (message) => set({ message }),
}));
