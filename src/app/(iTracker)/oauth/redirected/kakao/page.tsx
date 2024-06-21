'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { issuLoginToken } from '@/features/login/api/oauth';
import { Loading } from '@/shared/components/Loading';
import { useToast } from '@/shared/components/shadcn/ui/use-toast';

export default function KakaoCallbackPage() {
  const searchParams = useSearchParams();
  const [authCode, setAuthCode] = useState<string | null>(null);
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
      issuLoginToken(authCode)
        .then(() => {
          toast({
            title: '로그인 완료!',
          });
          // router.push('/mypage');
        })
        .catch((e) => console.error(e));
    }
  }, [authCode, router, toast]);

  return <Loading />;
}
