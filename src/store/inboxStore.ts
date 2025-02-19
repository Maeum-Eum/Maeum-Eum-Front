import { create } from 'zustand';
import { IGetMainList } from '../services/home';

interface InboxState {
  data: IGetMainList | null;
  setData: (data: IGetMainList) => void;
  index: number;
  setIndex: (index: number) => void;
}

export const useInboxStore = create<InboxState>((set) => ({
  index: 0,
  data: null,
  setData: (data) => set({ data }),
  setIndex: (index) => set({ index }),
}));
