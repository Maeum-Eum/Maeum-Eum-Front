import { create } from 'zustand';

interface HomeOptionStoreState {
  range: string;
  order: string;
  distance: string;
  setRange: (range: string) => void;
  setOrder: (order: string) => void;
  modal: boolean;
  setModal: (modal: boolean) => void;
  setDistance: (distance: string) => void;
  elderName: string;
  setElderName: (name: string) => void;
  rangeText: string;
  setRangeText: (rangeText: string) => void;
}

export const useHomeOptionStoreStore = create<HomeOptionStoreState>((set) => ({
  range: '1.25',
  order: '1',
  modal: false,
  distance: '도보15분이내',
  rangeText: '업무정확도순',
  setRangeText: (rangeText) => set({ rangeText }),
  setDistance: (distance) => set({ distance }),
  elderName: '',
  setElderName: (elderName) => set({ elderName }),
  setModal: (modal) => set({ modal }),

  setRange: (range) => set({ range }),
  setOrder: (order) => set({ order }),
}));
