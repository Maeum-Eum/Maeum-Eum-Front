import { create } from 'zustand';

export interface IAddress {
  zonecode: string;
  roadAddress: string;
  jibunAddress: string;
}

export interface IExperience {
  startDate: string;
  endDate: string;
  centerId: number; //TODO: 도로명으로 수정?
  work: string;
}

export interface SignUpState {
  step: number;
  setStep: (step: number) => void;
  idDuplicate: boolean | null;
  setDuplicate: (dup: boolean | null) => void;
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
    experience: string | null;
  };

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
  setDuplicate: (idDuplicate) => set({ idDuplicate }),
  formData: {
    id: '',
    password: '',
    passwordCheck: '',
    type: '',
    name: '',
    phone: '',
    address: { zonecode: '', roadAddress: '', jibunAddress: '' },
    centerAddress: { zonecode: '', roadAddress: '', jibunAddress: '' },
    hasCar: true,
    experience: [{ startDate: '', endDate: '', work: '', centerId: -1 }],
    introduction: '',
  },
  setStep: (step) => set({ step }),

  updateFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),

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
          centerId: 0,
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
    experience: null,
  },
  validateForm: (fields?: (keyof SignUpState['formData'])[]) => {
    const { formData, errors, idDuplicate } = get();
    const newErrors = { ...errors };
    const hasPartialExperience = formData.experience.some(
      ({ startDate, endDate, centerId, work }) => {
        const isPartiallyFilled =
          (startDate || endDate || centerId !== -1 || work) &&
          (!startDate || !endDate || centerId === -1 || !work);

        return isPartiallyFilled;
      }
    );
    const fieldValidators = {
      id:
        formData.id.trim() !== ''
          ? idDuplicate
            ? '*사용할 수 없는 아이디 입니다.'
            : idDuplicate === null
            ? '*중복확인을 해주세요'
            : null
          : '*8~20자의 영문소문자와 숫자를 입력해주세요',
      password:
        formData.password.length >= 8 //TODO: 변경 필요
          ? null
          : '*비밀번호는 최소 8자리 이상이어야 합니다.',
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

      experience: hasPartialExperience ? '*비어있는 필드가 있습니다.' : null,
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
    console.log(formData.experience);
    return Object.values(newErrors).every((error) => error === null);
  },
}));
