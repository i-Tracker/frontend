'use client';

import { Header } from '@/shared/components/Header';
import HeaderWithBackRoute from '@/shared/components/Header/HeaderWithBackRoute';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const showHeader = !pathName.startsWith('/products');

  return (
    <div className="flex-1 w-full flex flex-col gap-8 max-w-[1080px] mx-auto px-4 pb-16">
      {showHeader ? <Header /> : <HeaderWithBackRoute />}
      {children}
    </div>
  );
}
