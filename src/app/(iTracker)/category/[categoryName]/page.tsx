import { CategoryType } from '@/features/category/constants';
import { Filter } from '@/features/search/components/filter';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function CategoryNamePage({ params }: { params: { categoryName: CategoryType } }) {
  return (
    <ErrorBoundary fallback={<div>필터 정보를 받아오지 못했습니다.</div>}>
      <Suspense>
        <Filter title="상품 필터" category={params.categoryName} variant={false} />
      </Suspense>
    </ErrorBoundary>
  );
}
