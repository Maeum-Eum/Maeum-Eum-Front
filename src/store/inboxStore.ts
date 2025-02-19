import { create } from 'zustand';
import { IGetMainList } from '../services/home';
import { IManagerInBox } from '../services/myPage';

interface InboxState {
  data: IGetMainList | null;
  setData: (data: IGetMainList) => void;
  index: number;
  setIndex: (index: number) => void;
  managerData: IManagerInBox[] | null;
  setManagerData: (data: IManagerInBox[]) => void;
}

export const useInboxStore = create<InboxState>((set) => ({
  index: 0,
  data: null,
  managerData: null,
  setData: (data) => set({ data }),
  setIndex: (index) => set({ index }),
  setManagerData: (managerData) => set({ managerData }),
}));
