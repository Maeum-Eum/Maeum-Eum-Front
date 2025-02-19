import { create } from 'zustand';

import { IOutgoingBox } from '../services/myPage';

interface OutGoingBoxState {
  outGoingData: IOutgoingBox | null;
  setoutGoingData: (data: IOutgoingBox) => void;
}

export const useOutGoingBoxStore = create<OutGoingBoxState>((set) => ({
  outGoingData: null,
  setoutGoingData: (outGoingData) => set({ outGoingData }),
}));
