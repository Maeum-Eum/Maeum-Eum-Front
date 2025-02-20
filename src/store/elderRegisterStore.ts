import { create } from 'zustand';

interface WorkTime {
  start: string;
  end: string;
}

export interface ElderData {
  name: string;
  gender: 'male' | 'female';
  birth: string;
  address: string;
  rank: number;
  mon?: WorkTime;
  tue?: WorkTime;
  wed?: WorkTime;
  thu?: WorkTime;
  fri?: WorkTime;
  sat?: WorkTime;
  sun?: WorkTime;
  meal: string[];
  toileting: string[];
  mobility: string[];
  daily: string[];
  family: string;
  pet: string;
  negotiable: boolean;
  wageType: string;
  wage: number;
}

interface ElderRegisterState {
  step: number;
  elder: ElderData;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;

  setElderData: <K extends keyof ElderData>(
    field: K,
    value: ElderData[K]
  ) => void;
  setWorkTime: (day: keyof ElderData, workTime: WorkTime) => void;

  setMeal: (meal: string[]) => void;
  setToileting: (toileting: string[]) => void;
  setMobility: (mobility: string[]) => void;
  setDaily: (daily: string[]) => void;

  setWageType: (wageType: string) => void;
  setWage: (wage: number) => void;
}

export const useElderRegisterStore = create<ElderRegisterState>((set) => ({
  step: 1,
  elder: {
    name: '',
    gender: 'male',
    birth: '',
    address: '',
    rank: 0,
    meal: [],
    toileting: [],
    mobility: [],
    daily: [],
    family: '',
    pet: '',
    negotiable: false,
    wageType: '시급',
    wage: 0,
  },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),
  resetStep: () => set({ step: 1 }),

  setElderData: (field, value) =>
    set((state) => ({
      elder: { ...state.elder, [field]: value },
    })),

  setWorkTime: (day, workTime) =>
    set((state) => ({
      elder: { ...state.elder, [day]: workTime },
    })),

  setMeal: (meal) =>
    set((state) => ({
      elder: { ...state.elder, meal },
    })),
  setToileting: (toileting) =>
    set((state) => ({
      elder: { ...state.elder, toileting },
    })),

  setMobility: (mobility) =>
    set((state) => ({
      elder: { ...state.elder, mobility },
    })),

  setDaily: (daily) =>
    set((state) => ({
      elder: { ...state.elder, daily },
    })),

  setWageType: (wageType) =>
    set((state) => ({
      elder: { ...state.elder, wageType },
    })),

  setWage: (wage) =>
    set((state) => ({
      elder: { ...state.elder, wage },
    })),
}));
