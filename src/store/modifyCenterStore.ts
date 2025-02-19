import { create } from 'zustand';

interface ModifyCenterState {
  center: string;
  centerId: number;
  hasCar: boolean;
  setCenterId: (centerId: number) => void;
  setCenter: (center: string) => void;
  setHasCar: (hasCar: boolean) => void;
  shortPr: string;
  setShortPr: (shortPr: string) => void;
}

export const useModifyCenterStore = create<ModifyCenterState>((set) => ({
  center: '',
  hasCar: false,
  shortPr: '',
  centerId: -1,
  setCenterId: (centerId) => set({ centerId }),
  setShortPr: (shortPr) => set({ shortPr }),
  setCenter: (center) => set({ center }),
  setHasCar: (hasCar) => set({ hasCar }),
}));
