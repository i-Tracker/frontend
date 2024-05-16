import { CategoryList } from '@/features/category/components/CategoryList';
import { Header } from '@/shared/components/Header';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center">
      <Header />
      <Suspense fallback={<div>로딩중</div>}>
        <CategoryList />
      </Suspense>
      {children}
    </div>
  );
}
