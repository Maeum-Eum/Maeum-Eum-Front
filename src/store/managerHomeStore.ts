import { create } from 'zustand';
import { IElder, IManagerMain } from '../services/home';

interface ManagerHomeState {
  data: IManagerMain[] | null;
  setData: (data: IManagerMain[]) => void;
  toggleBookmark: (caregiverId: number) => void;
  elderList: IElder[];
  setElderList: (data: IElder[]) => void;
  elderId: number;
  setElderId: (elderId: number) => void;
}

export const useManagerHomeStore = create<ManagerHomeState>((set) => ({
  data: null,
  setData: (data) => set({ data }),
  toggleBookmark: (caregiverId) =>
    set((state) => ({
      data: state.data
        ? state.data.map((item) =>
            item.caregiverId === caregiverId
              ? { ...item, isBookmarks: !item.isBookmarks }
              : item
          )
        : null,
    })),
  elderList: [],
  setElderList: (elderList) => set({ elderList }),
  elderId: 0,
  setElderId: (elderId) => set({ elderId }),
}));
