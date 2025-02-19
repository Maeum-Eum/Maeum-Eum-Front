import { create } from 'zustand';

interface ContactState {
  step: number;
  setStep: (step: number) => void;
  workRequirement: string;
  wage: number;
  phonenumber: string;
  message: string;
  setWorkRequirement: (workRequirement: string) => void;
  setWage: (wage: number) => void;
  setPhonenumber: (phonenumber: string) => void;
}

export const useContactStore = create<ContactState>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
  workRequirement: '',
  wage: 0,
  phonenumber: '',
  message: '',
  setWorkRequirement: (workRequirement) => set({ workRequirement }),
  setWage: (wage) => set({ wage }),
  setPhonenumber: (phonenumber) => set({ phonenumber }),
}));
