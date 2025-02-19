import { create } from 'zustand';

interface Experience {
  startDate: string;
  endDate: string;
  centerId: number;
  work: string;
}

interface Resume {
  jobPosition: string[];
  hasDementiaTraining: string;
  certificateCode: string;
  hasVehicle: string;
  workPlace: string[];
  workDay: string[];
  workTimeSlot: string[];
  isNegotiableTime: boolean;
  wage: number;
  elderRank: number[];
  meal: string[];
  toileting: string[];
  mobility: string[];
  daily: string[];
  preferredGender: string;
  isFamilyPreferred: boolean;
  isPetPreferred: boolean;
  experience: Experience[];
  introduction: string;
}

interface ResumeState {
  step: number;
  resume: Resume;

  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;

  setJobPosition: (jobPosition: string[]) => void;
  setCertificateCode: (certificateCode: string) => void;
  setHasDementiaTraining: (hasDementiaTraining: string) => void;
  setHasVehicle: (hasVehicle: string) => void;
  setWorkPlace: (workPlace: string[]) => void;
  setWorkDay: (workDay: string[]) => void;
  setWorkTimeSlot: (workTimeSlot: string[]) => void;
  setWage: (wage: number) => void;
  setIsNegotiableTime: (isNegotiableTime: boolean) => void;
  setElderRank: (elderRank: number[]) => void;
  resetResume: () => void;
  setMeal: (meal: string[]) => void;
  setToileting: (toileting: string[]) => void;
  setMobility: (mobility: string[]) => void;
  setDaily: (daily: string[]) => void;
  setPreferredGender: (preferredGender: string) => void;
  setIsFamilyPreferred: (isFamilyPreferred: boolean) => void;
  setIsPetPreferred: (isPetPreferred: boolean) => void;

  setExperience: (newExperience: Experience[]) => void;

  updateExperienceField: (
    index: number,
    field: keyof Experience, 
    value: string | number
  ) => void;

  setIntroduction: (introduction: string) => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  step: 1,
  resume: {
    //step 1
    jobPosition: [],
    hasDementiaTraining: '',

    //step2
    certificateCode: '',

    //step3
    hasVehicle: '',
    workPlace: [],

    // step4
    workDay: [],
    workTimeSlot: [],
    isNegotiableTime: false,
    wage: 0,

    //step5
    elderRank: [],

    //step6
    meal: [],
    toileting: [],
    mobility: [],
    daily: [],

    //step7
    preferredGender: 'EVERY',
    isFamilyPreferred: false,
    isPetPreferred: false,

    //step8, 9
    experience: [],
    introduction: '',
  },

  // step 이동
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: Math.max(0, state.step - 1) })),
  resetStep: () => set(() => ({ step: 0 })),

  setJobPosition: (jobPosition) =>
    set((state) => ({
      resume: { ...state.resume, jobPosition },
    })),

  setHasDementiaTraining: (hasDementiaTraining) =>
    set((state) => ({
      resume: { ...state.resume, hasDementiaTraining },
    })),

  setCertificateCode: (certificateCode) =>
    set((state) => ({
      resume: { ...state.resume, certificateCode },
    })),

  setHasVehicle: (hasVehicle) =>
    set((state) => ({
      resume: { ...state.resume, hasVehicle },
    })),

  setWorkPlace: (workPlace) =>
    set((state) => ({
      resume: { ...state.resume, workPlace },
    })),

  setWorkDay: (workDay) =>
    set((state) => ({
      resume: { ...state.resume, workDay },
    })),

  setWorkTimeSlot: (workTimeSlot) =>
    set((state) => ({
      resume: { ...state.resume, workTimeSlot },
    })),

  setWage: (wage) =>
    set((state) => ({
      resume: { ...state.resume, wage },
    })),

  setIsNegotiableTime: (isNegotiableTime) =>
    set((state) => ({
      resume: { ...state.resume, isNegotiableTime },
    })),

  setElderRank: (elderRank) =>
    set((state) => ({
      resume: { ...state.resume, elderRank },
    })),
  setMeal: (meal: string[]) =>
    set((state) => ({
      resume: { ...state.resume, meal },
    })),

  setToileting: (toileting: string[]) =>
    set((state) => ({
      resume: { ...state.resume, toileting },
    })),

  setMobility: (mobility: string[]) =>
    set((state) => ({
      resume: { ...state.resume, mobility },
    })),

  setDaily: (daily: string[]) =>
    set((state) => ({
      resume: { ...state.resume, daily },
    })),

  setPreferredGender: (preferredGender: string) =>
    set((state) => ({ resume: { ...state.resume, preferredGender } })),

  setIsFamilyPreferred: (isFamilyPreferred: boolean) =>
    set((state) => ({ resume: { ...state.resume, isFamilyPreferred } })),

  setIsPetPreferred: (isPetPreferred: boolean) =>
    set((state) => ({ resume: { ...state.resume, isPetPreferred } })),

  setExperience: (newExperience) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: [...state.resume.experience, ...newExperience],
      },
    })),

  updateExperienceField: (
    index: number,
    field,
    value: string | number
  ) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: state.resume.experience.map((exp, i) =>
          i === index ? { ...exp, [field]: value } : exp
        ),
      },
    })),

    setIntroduction:(introduction) => set((state) => ({
        resume: {...state.resume, introduction}
    })),

  resetResume: () =>
    set(() => ({
      step: 1,
      resume: {
        jobPosition: [],
        certificateCode: '',
        hasDementiaTraining: '',
        hasVehicle: '',
        workPlace: [],
        workDay: [],
        workTimeSlot: [],
        isNegotiableTime: false,
        wage: 0,
        elderRank: [],
        meal: [],
        toileting: [],
        mobility: [],
        daily: [],
        preferredGender: 'EVERY',
        isFamilyPreferred: false,
        isPetPreferred: false,
        experience: [],
        introduction: '',
      },
    })),
}));
