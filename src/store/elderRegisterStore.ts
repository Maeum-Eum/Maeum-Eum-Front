import { create } from "zustand";

interface ElderRegisterState {
    step: number;
    nextStep: () => void;
    prevStep: () => void;
    resetStep: () => void;
}

export const useElderRegisterStore = create<ElderRegisterState>((set) => ({
    step: 1,
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),
    resetStep: () => set({ step: 1 }),
}))