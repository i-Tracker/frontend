import { CategoryList } from '@/features/category/components/CategoryList';
import { CategoryListSkeleton } from '@/features/category/components/CategoryList/Skeleton';
import { categoryMap, CategoryType } from '@/features/category/constants';
import { MacbookProductList } from '@/features/product/components/macbook';
import { MacbookProductListSkeleton } from '@/features/product/components/macbook/Skeleton';
import { Text } from '@/shared/components/shadcn/Text';
import { ErrorBoundary } from 'react-error-boundary';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { getMetadata } from '@/shared/utils/metadata';
import { FixedBottomNavbar } from '@/shared/components/FixedBottomNavbar';

export const generateMetadata = async ({
  params,
}: {
  params: { categoryName: CategoryType };
  // eslint-disable-next-line @typescript-eslint/require-await
}): Promise<Metadata> => {
  const categoryName = categoryMap[params.categoryName];

  return getMetadata({
    title: `iTracker | ${categoryName}`,
    asPath: `/category/${categoryName}`,
  });
};

export default function Layout({
  params,
  children,
}: {
  params: { categoryName: CategoryType };
  children: React.ReactNode;
}) {
  const categoryName = categoryMap[params.categoryName];

  return (
    <div>
      <Suspense fallback={<CategoryListSkeleton />}>
        <CategoryList />
      </Suspense>
      <div className="flex-1 w-full flex flex-col">
        <Text typography="h2" className="mb-6 text-center">
          {categoryName}
        </Text>
        {categoryName === 'MacBook Air' || categoryName === 'MacBook Pro' ? (
          <>
            <Text typography="h4">오늘의 할인율 TOP5</Text>
            <Text typography="p" className="md:text-lg text-gray-500">
              오늘 할인율이 가장 높은 상품리스트
            </Text>
            <ErrorBoundary fallback={<div>제품 정보를 가져오지 못했습니다.</div>}>
              <Suspense fallback={<MacbookProductListSkeleton />}>
                <MacbookProductList category={params.categoryName} />
              </Suspense>
            </ErrorBoundary>
          </>
        ) : null}
        {children}
      </div>
      <FixedBottomNavbar />
    </div>
  );
}
