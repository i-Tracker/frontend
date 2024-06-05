import { CategoryList } from '@/features/category/components/CategoryList';
import { CategoryListSkeleton } from '@/features/category/components/CategoryList/Skeleton';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<CategoryListSkeleton />}>
        <CategoryList />
      </Suspense>
    </main>
  );
}
