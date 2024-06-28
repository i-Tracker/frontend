import KakaoCallback from '@/features/auth/components/KakaoCallback';
import { Loading } from '@/shared/components/Loading';
import { Suspense } from 'react';

export default function KakaoCallbackPage() {
  return (
    <Suspense fallback={<Loading />}>
      <KakaoCallback />
    </Suspense>
  );
}
