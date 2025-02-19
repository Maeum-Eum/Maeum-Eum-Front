import { create } from 'zustand';

interface HomeOptionStoreState {
  range: string;
  order: string;
  setRange: (range: string) => void;
  setOrder: (order: string) => void;
  modal: boolean;
  setModal: (modal: boolean) => void;
}

export const useHomeOptionStoreStore = create<HomeOptionStoreState>((set) => ({
  range: '1.25',
  order: '1',
  modal: false,
  setModal: (modal) => set({ modal }),

  setRange: (range) => set({ range }),
  setOrder: (order) => set({ order }),
}));
