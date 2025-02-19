import { create } from 'zustand';

import { IManagerSend, IOutgoingBox } from '../services/myPage';

interface OutGoingBoxState {
  index: number;
  setIndex: (index: number) => void;
  outGoingData: IOutgoingBox | null;
  setoutGoingData: (data: IOutgoingBox) => void;
  managerOutGoingDataPending: IManagerSend[] | null;
  managerOutGoingDataApproved: IManagerSend[] | null;
  setManagerOutGoingDataPending: (data: IManagerSend[]) => void;
  setManagerOutGoingDataApproved: (data: IManagerSend[]) => void;
  elderName: string;
  setElderName: (name: string) => void;
}

export const useOutGoingBoxStore = create<OutGoingBoxState>((set) => ({
  setIndex: (index) => set({ index }),
  index: 0,
  outGoingData: null,
  managerOutGoingDataPending: null,
  managerOutGoingDataApproved: null,
  setoutGoingData: (outGoingData) => set({ outGoingData }),
  setManagerOutGoingDataPending: (managerOutGoingDataPending) =>
    set({ managerOutGoingDataPending }),
  setManagerOutGoingDataApproved: (managerOutGoingDataApproved) =>
    set({ managerOutGoingDataApproved }),
  elderName: '',
  setElderName: (name) => set({ elderName: name }),
}));
