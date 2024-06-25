import { FixedBottomNavbar } from '@/shared/components/FixedBottomNavbar';
import { Header } from '@/shared/components/Header';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 w-full flex flex-col gap-8 max-w-[1080px] mx-auto px-4 pb-16">
      <Suspense fallback={<div>asd</div>}>
        <Header />
      </Suspense>
      {children}
      <FixedBottomNavbar />
    </div>
  );
}
