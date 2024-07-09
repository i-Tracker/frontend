'use client';

import { Text } from '@/shared/components/shadcn/Text';
import { Button } from '@/shared/components/shadcn/ui/button';
import { Input } from '@/shared/components/shadcn/ui/input';
import { Label } from '@/shared/components/shadcn/ui/label';
import { ChangeEvent, FormEvent, KeyboardEvent, useRef, useState } from 'react';
import { getSignupStatus } from '../../api/getSignupStatus';
import { API_BASE_URL } from '@/shared/api/constants';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [phoneNumber, setPhoneNumber] = useState<string[]>(['010', '', '']);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const validatePhoneNumber = (number: string): boolean => {
    const fullNumber = number.replace(/-/g, '');
    const regex = /^010\d{8}$/;
    return regex.test(fullNumber);
  };

  const handleChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const newPhoneNumber = [...phoneNumber];
    newPhoneNumber[index + 1] = value;
    setPhoneNumber(newPhoneNumber);

    const fullNumber = newPhoneNumber.join('');
    const valid = validatePhoneNumber(fullNumber);
    setIsValid(valid);
    setError(valid ? '' : '유효하지 않은 전화번호입니다.');

    // 자동으로 다음 input으로 이동
    if (value.length === inputLengths[index] && index < 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number) => (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && phoneNumber[index + 1] === '' && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValid) {
      const fullNumber = phoneNumber.join('');

      const response = await getSignupStatus(fullNumber);
      const 회원가입된유저인가 = response.data.isDuplicatedPhoneNumber;

      if (회원가입된유저인가) {
        alert('이미 가입된 회원입니다. 카카오 로그인을 통해 로그인해주세요.');
        router.push('/login');
      } else {
        alert('최초 가입자입니다. 카카오 로그인으로 이동합니다.');
        window.location.href = `${API_BASE_URL}/api/v1/oauth/kakao`;
      }
    } else {
      setError('유효한 전화번호를 입력해주세요.');
    }
  };

  const inputLengths = [4, 4];
  const validInputStyles = isValid ? 'border-green-500' : '';
  const errorInputStyles = error ? 'border-red-500' : '';

  return (
    <div className="my-8">
      <form onSubmit={handleSubmit} className="flex flex-col items-end">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="tel">전화번호</Label>
          <div className="flex items-center gap-2">
            <Text typography="h3">010</Text>
            <Text typography="h3">-</Text>
            {[0, 1].map((index) => (
              <Input
                key={index}
                type="tel"
                value={phoneNumber[index + 1]}
                onChange={handleChange(index)}
                onKeyDown={handleKeyDown(index)}
                maxLength={inputLengths[index]}
                ref={inputRefs[index]}
                className={`w-[100px] h-[50px] text-center text-[24px] font-bold ${validInputStyles} ${errorInputStyles}`}
              />
            ))}
          </div>
          <div className="h-[20px]">
            {error && <p className="text-red-500 text-sm text-end">{error}</p>}
            {isValid && <p className="text-green-500 text-sm text-end">유효한 전화번호입니다.</p>}
          </div>
        </div>
        <Button type="submit" className="mt-6" disabled={!isValid}>
          회원가입
        </Button>
      </form>
    </div>
  );
}
