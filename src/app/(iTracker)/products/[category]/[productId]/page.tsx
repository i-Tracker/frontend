import { CategoryType } from '@/features/category/constants';
import { ProductDetail } from '@/features/productDetail/components/ProductDetail';
import { Loading } from '@/shared/components/Loading';
import { Text } from '@/shared/components/shadcn/Text';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function ProductDetailPage({ params }: { params: { productId: number; category: CategoryType } }) {
  return (
    <main>
      <ErrorBoundary fallback={<Text className="text-badge">상세 정보를 불러오는 중 오류가 생겼습니다.</Text>}>
        <Suspense fallback={<Loading />}>
          <ProductDetail productId={params.productId} category={params.category} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
