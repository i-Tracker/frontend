import { MainProductList } from '@/features/product/components/main';
import { ProductListSkeleton } from '@/features/search/components/searchResult/Skeleton';
import { FixedBottomNavbar } from '@/shared/components/FixedBottomNavbar';
import { Text } from '@/shared/components/shadcn/Text';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function Home() {
  return (
    <>
      <div className="flex-1 w-full flex flex-col py-2 border-gray-200">
        <Text typography="h4">전체 상품 할인율 TOP10</Text>
        <Text typography="p" className="md:text-lg text-gray-500">
          전체 상품 중 오늘 할인율이 가장 높은 상품 리스트
        </Text>
        <ErrorBoundary fallback={<Text>상품을 불러오지 못했습니다.</Text>}>
          <Suspense fallback={<ProductListSkeleton />}>
            <MainProductList />
          </Suspense>
        </ErrorBoundary>
      </div>
      <FixedBottomNavbar />
    </>
  );
}
