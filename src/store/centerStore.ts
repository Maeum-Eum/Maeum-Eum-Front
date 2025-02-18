import { create } from 'zustand';
import { ICenter } from '../services/signup';

interface CenterState {
  centers: ICenter[];
  setCenter: (centers: ICenter[]) => void;
}

export const useCenterStore = create<CenterState>((set) => ({
  centers: [],
  setCenter: (centers) => set({ centers }),
}));
