import { numInput } from './regex';

export const formatPhoneNumber = (
  value: React.ChangeEvent<HTMLInputElement>
) => {
  const onlyNumbers = numInput(value);

  if (onlyNumbers.length <= 3) return onlyNumbers;
  if (onlyNumbers.length <= 7)
    return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3)}`;
  return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(
    3,
    7
  )}-${onlyNumbers.slice(7, 11)}`;
};

export const formatWage = (value: number | string) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
export const formatDate = (dateTime: string): string => {
  return dateTime.split('T')[0];
};

export const isValidPassword = (format: string): boolean => {
  if (format.length < 10) return false; // 8자리 이상 검사

  const hasLetter = /[a-zA-Z]/.test(format); // 알파벳 포함 여부
  const hasNumber = /\d/.test(format); // 숫자 포함 여부
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(format); // 특수문자 포함 여부

  const typeCount = [hasLetter, hasNumber, hasSpecialChar].filter(
    Boolean
  ).length;

  return typeCount >= 3;
};

export const isValidId = (id: string): boolean => {
  if (id.length < 8 || id.length > 20) return false; // 8~20자 길이 체크

  const hasOnlyValidChars = /^[a-z0-9]+$/.test(id); // 영문 소문자 & 숫자만 허용
  const hasLowercase = /[a-z]/.test(id); // 소문자 포함 여부
  const hasNumber = /\d/.test(id); // 숫자 포함 여부

  return hasOnlyValidChars && hasLowercase && hasNumber; // 소문자 + 숫자만 존재해야 함
};
