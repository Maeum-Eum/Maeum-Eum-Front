import { create } from 'zustand';
import { IGetMainList } from '../services/home';

interface CareGiverHomeState {
  data: IGetMainList | null;
  setData: (data: IGetMainList) => void;
}

export const useCareGiverHomeStore = create<CareGiverHomeState>((set) => ({
  data: null,

  setData: (data) => set({ data }),
}));
