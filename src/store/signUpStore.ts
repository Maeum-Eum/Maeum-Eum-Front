import { create } from 'zustand';
import { isValidId, isValidPassword } from '../utils/utils';

export interface IAddress {
  zonecode: string;
  roadAddress: string;
  jibunAddress: string;
  centerId?: number;
}

export interface IExperience {
  startDate: string;
  endDate: string;
  center: string;
  work: string;
}

export interface SignUpState {
  step: number;
  setStep: (step: number) => void;
  idDuplicate: boolean | null;
  setDuplicate: (dup: boolean | null) => void;
  permission1: boolean;
  permission2: boolean;
  setPermission1: (p: boolean) => void;
  setPermission2: (p: boolean) => void;
  file: File | null;
  setFile: (f: File) => void;
  formData: {
    id: string;
    password: string;
    passwordCheck: string;
    type: string;
    name: string;
    phone: string;
    address: IAddress;
    centerAddress: IAddress;
    hasCar: boolean;
    experience: IExperience[];
    introduction: string;
  };
  errors: {
    id: string | null;
    password: string | null;
    passwordCheck: string | null;
    type: string | null;
    name: string | null;
    phone: string | null;
    address: string | null;
    centerAddress: string | null;
  };
  experienceIndex: number;
  setExperienceIndex: (index: number) => void;
  updateFormData: (data: Partial<SignUpState['formData']>) => void;
  updateExperienceField: (
    index: number,
    field: keyof IExperience,
    value: string | number
  ) => void;
  removeExperience: (index: number) => void;
  validateForm: (fields?: (keyof SignUpState['formData'])[]) => boolean;
}

export const useSignUpStore = create<SignUpState>((set, get) => ({
  step: 1,
  idDuplicate: null,
  permission2: false,
  permission1: false,
  file: null,
  setFile: (file) => set({ file }),
  setPermission1: (permission1) => set({ permission1 }),
  setPermission2: (permission2) => set({ permission2 }),
  setDuplicate: (idDuplicate) =>
    set((state) => ({
      idDuplicate,
      errors: {
        ...state.errors,
        id: isValidId(state.formData.id)
          ? idDuplicate === null
            ? '*중복확인을 해주세요'
            : idDuplicate === true
            ? '*사용할 수 없는 아이디입니다'
            : null
          : '*8~20자의 영문소문자와 숫자만 입력 가능합니다.',
      },
    })),
  formData: {
    id: '',
    password: '',
    passwordCheck: '',
    type: '',
    name: '',
    phone: '',
    address: { zonecode: '', roadAddress: '', jibunAddress: '' },
    centerAddress: {
      zonecode: '',
      roadAddress: '',
      jibunAddress: '',
      centerId: 0,
    },
    hasCar: true,
    experience: [{ startDate: '', endDate: '', work: '', center: '' }],
    introduction: '',
  },
  setStep: (step) => set({ step }),

  updateFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  experienceIndex: 0,
  setExperienceIndex: (experienceIndex) => set({ experienceIndex }),
  updateExperienceField: (
    index: number,
    field: keyof IExperience,
    value: string | number
  ) =>
    set((state) => {
      const updatedExperience = [...state.formData.experience]; // 기존 경험 배열 복사
      if (!updatedExperience[index]) {
        updatedExperience[index] = {
          startDate: '',
          endDate: '',
          center: '',
          work: '',
        }; // 없으면 초기값 생성
      }
      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: value,
      }; // 필드 업데이트

      return {
        formData: {
          ...state.formData,
          experience: updatedExperience,
        },
      };
    }),

  removeExperience: (index) =>
    set((state) => ({
      formData: {
        ...state.formData,
        experience: state.formData.experience.filter((_, i) => i !== index),
      },
    })),
  errors: {
    id: null,
    password: null,
    passwordCheck: null,
    type: null,
    name: null,
    phone: null,
    address: null,
    centerAddress: null,
  },
  validateForm: (fields?: (keyof SignUpState['formData'])[]) => {
    const { formData, errors, idDuplicate } = get();

    if (fields && fields[0] === 'experience') {
      const filteredExperience = formData.experience.filter(
        (exp) => exp.startDate && exp.endDate && exp.center && exp.work
      );
      // 필터링된 experience로 업데이트
      set((state) => ({
        formData: {
          ...state.formData,
          experience:
            filteredExperience.length === 0
              ? [{ startDate: '', endDate: '', work: '', center: '' }]
              : filteredExperience,
        },
      }));
      return true;
    }
    const newErrors = { ...errors };
    const fieldValidators = {
      id: isValidId(formData.id)
        ? idDuplicate === null
          ? '*중복확인을 해주세요'
          : idDuplicate === true
          ? '*사용할 수 없는 아이디입니다'
          : null
        : '*8~20자의 영문소문자와 숫자만 입력 가능합니다.',
      password: isValidPassword(formData.password)
        ? null
        : '*10~20자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요',
      passwordCheck:
        formData.password === formData.passwordCheck
          ? null
          : '*비밀번호가 일치하지 않습니다.',

      type: formData.type === '' ? '*회원 유형을 선택해주세요.' : null,
      name: formData.name.trim() === '' ? '*이름을 입력해주세요.' : null,
      address:
        formData.address.zonecode === '' ? '*주소를 입력해주세요.' : null,
      centerAddress:
        formData.centerAddress.roadAddress === ''
          ? '*소속을 입력해주세요.'
          : null,
      phone:
        formData.phone.length < 13 ? '*휴대전화 번호를 확인해주세요' : null,
    };
    // 특정 필드만 검사하는 경우
    if (fields) {
      fields.forEach((field) => {
        newErrors[field as keyof typeof newErrors] =
          fieldValidators[field as keyof typeof fieldValidators];
      });
    } else {
      // 모든 필드를 검사하는 경우
      Object.keys(fieldValidators).forEach((key) => {
        newErrors[key as keyof typeof newErrors] =
          fieldValidators[key as keyof typeof fieldValidators];
      });
    } // 특정 필드만 검사하는 경우

    set({ errors: newErrors });

    return Object.values(newErrors).every((error) => error === null);
  },
}));
