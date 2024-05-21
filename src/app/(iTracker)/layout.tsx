import { CategoryList } from '@/features/category/components/CategoryList';
import { CategoryListSkeleton } from '@/features/category/components/CategoryList/Skeleton';
import { Header } from '@/shared/components/Header';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 w-full flex flex-col gap-10 max-w-[1080px] mx-auto px-4">
      <Header />
      <Suspense fallback={<CategoryListSkeleton />}>
        <CategoryList />
      </Suspense>
      {children}
    </div>
  );
}
