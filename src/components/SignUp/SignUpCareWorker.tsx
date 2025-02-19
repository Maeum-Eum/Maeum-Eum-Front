import { RoundedButton } from './RoundedButton';
import { Input } from '../Input';
import { SignUpLabel } from './SignUpLabel';
import { ErrorText, InputWrapper, SignUpLayout } from './SignUpLayout';
import { useSignUpStore } from '../../store/signUpStore';
import { AddressBox } from '../address/AddressBox';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { hangeulInput } from '../../utils/regex';
import { formatPhoneNumber } from '../../utils/utils';

export const SignUpCareWorker = () => {
  const { formData, updateFormData, errors } = useSignUpStore();

  const postcodeScriptUrl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data: any) => {
    updateFormData({
      address: {
        zonecode: data.zonecode,
        roadAddress: data.roadAddress,
        jibunAddress:
          data.jibunAddress === '' ? data.autoJibunAddress : data.jibunAddress,
      },
    });
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <SignUpLayout title="요양보호사님 정보 입력" require={true}>
      <SignUpLabel label="이름" />
      <Input
        placeholder="이름을 입력해주세요"
        value={formData.name}
        maxLength={10}
        onChange={(e) => updateFormData({ name: hangeulInput(e) })}
      />
      {errors.name && (
        <ErrorText error={errors.name !== null}>{errors.name}</ErrorText>
      )}
      <SignUpLabel label="휴대전화 번호" />
      <Input
        placeholder="휴대전화 번호를 입력해주세요"
        value={formData.phone}
        maxLength={13}
        onChange={(e) => updateFormData({ phone: formatPhoneNumber(e) })}
      />
      {errors.phone && (
        <ErrorText error={errors.phone !== null}>{errors.phone}</ErrorText>
      )}
      <SignUpLabel label="주소" />
      <InputWrapper>
        <Input placeholder="주소를 입력해주세요" disabled={true} />
        <RoundedButton
          text={'검색하기'}
          func={() => handleClick()}
        ></RoundedButton>
      </InputWrapper>
      {errors.address && (
        <ErrorText error={errors.address !== null}>{errors.address}</ErrorText>
      )}
      {formData.address.zonecode && <AddressBox address={formData.address} />}
    </SignUpLayout>
  );
};
