'use client';

import { Loading } from '@/shared/components/Loading';
import { Suspense } from 'react';

export default function KakaoCallbackPage() {
  return (
    <Suspense fallback={<Loading />}>
      <KakaoCallbackPage />
    </Suspense>
  );
}
