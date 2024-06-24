'use client';

import KakaoLogin from '@/features/auth/components/KakaoLogin';
import { Loading } from '@/shared/components/Loading';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <Suspense fallback={<Loading />}>
      <KakaoLogin />
    </Suspense>
  );
}
