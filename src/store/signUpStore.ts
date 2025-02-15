import { create } from 'zustand';
export interface IAddress {
  zonecode: string;
  roadAddress: string;
  jibunAddress: string;
}
interface SignUpState {
  step: number;
  setStep: (step: number) => void;

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
    experience: string;
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

  updateFormData: (data: Partial<SignUpState['formData']>) => void;
  validateForm: (fields?: (keyof SignUpState['formData'])[]) => boolean;
}

export const useSignUpStore = create<SignUpState>((set, get) => ({
  step: 1,
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
    experience: '',
    introduction: '',
  },
  setStep: (step) => set({ step }),

  updateFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
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
    const { formData, errors } = get();
    const newErrors = { ...errors };

    const fieldValidators = {
      id: formData.id.trim() !== '' ? null : '*올바른 이메일을 입력하세요.', //중복확인 등 체크 요소 변경
      password:
        formData.password.length >= 2 //변경 필요
          ? null
          : '*비밀번호는 최소 6자리 이상이어야 합니다.',
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
        formData.phone.length < 11 ? '*휴대전화 번호를 확인해주세요' : null,
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
    }
    set({ errors: newErrors });
    console.log(Object.values(newErrors).every((error) => error === null));
    return Object.values(newErrors).every((error) => error === null);
  },
}));
