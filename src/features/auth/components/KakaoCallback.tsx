'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useToast } from '@/shared/components/shadcn/ui/use-toast';
import { getLoginToken } from '@/features/auth/api/oauth';

export default function KakaoCallback() {
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
      getLoginToken(authCode)
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
  }, [authCode, router, toast]);

  return <div>processing...</div>;
}
