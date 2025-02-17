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
