const onlyNum = /[^0-9]/gi;

export const numInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  return e.target.value.replace(onlyNum, '');
};

const onlyHangeul = /[^ㄱ-ㅎ가-힣ㆍ ᆢ]/gi;

export const hangeulInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  return e.target.value.replace(onlyHangeul, '');
};
