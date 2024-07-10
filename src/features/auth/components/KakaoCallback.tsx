'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useToast } from '@/shared/components/shadcn/ui/use-toast';
import { Loading } from '@/shared/components/Loading';
import { useLogin } from '../hooks/useLogin';

export default function KakaoCallback() {
  const searchParams = useSearchParams();
  const [authCode, setAuthCode] = useState<string | null>(null);
  const { getLoginToken } = useLogin();

  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const code = searchParams.get('code');

    if (code && code !== authCode) {
      setAuthCode(code);
    }
  }, [searchParams, authCode]);

  useEffect(() => {
    if (authCode) {
      getLoginToken(authCode)
        .then(() => {
          toast({
            title: '로그인 완료!',
          });
          router.push('/my');
        })
        .catch((e: unknown) => {
          console.error(e);
          router.push('/login');
        });
    }
  }, [authCode, router, toast]);

  return (
    <div className="flex w-full h-[80vh] justify-center items-center">
      <Loading />
    </div>
  );
}
