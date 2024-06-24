'use client';

import Login from '@/features/auth/components/login';
import { Loading } from '@/shared/components/Loading';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Login />
    </Suspense>
  );
}
