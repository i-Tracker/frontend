'use client';

import { isLogin } from '@/features/auth/api/oauth';
import { FixedBottomNavbar } from '@/shared/components/FixedBottomNavbar';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (!isLogin()) {
      router.push('/login?needLogin=true');
    }
  }, [router]);

  return (
    <div className="flex-1 w-full flex flex-col">
      {children}
      <FixedBottomNavbar />
    </div>
  );
}
