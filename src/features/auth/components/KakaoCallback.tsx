'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useToast } from '@/shared/components/shadcn/ui/use-toast';
import { handleLogin } from '@/features/auth/api/oauth';
import { Loading } from '@/shared/components/Loading';

export default function KakaoCallback() {
  const searchParams = useSearchParams();
  const [authCode, setAuthCode] = useState<string | null>(null);
  const [isFirstUser, setIsFirstUser] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const code = searchParams.get('code');
    const 최초가입자인가 = searchParams.get('new');
    if (code && code !== authCode && 최초가입자인가 && 최초가입자인가 !== isFirstUser) {
      setAuthCode(code);
      setIsFirstUser(최초가입자인가);
    }
  }, [searchParams, authCode, isFirstUser]);

  useEffect(() => {
    if (authCode && isFirstUser !== null) {
      handleLogin(authCode, isFirstUser)
        .then(() => {
          toast({
            title: '로그인 완료!',
          });
          router.push('/my');
        })
        .catch((e) => {
          console.error(e);
          router.push('/login');
        });
    }
  }, [authCode, router, toast, isFirstUser]);

  return (
    <div className="flex w-full h-[80vh] justify-center items-center">
      <Loading />
    </div>
  );
}
