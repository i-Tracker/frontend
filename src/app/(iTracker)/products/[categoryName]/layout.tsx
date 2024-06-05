import { categoryMap, CategoryType } from '@/features/category/constants';
import { MacbookProductList } from '@/features/product/components/macbook';
import { MacbookProductListSkeleton } from '@/features/product/components/macbook/Skeleton';
import { Text } from '@/shared/components/shadcn/Text';
import React, { Suspense } from 'react';

export default function Layout({
  params,
  children,
}: {
  params: { categoryName: CategoryType };
  children: React.ReactNode;
}) {
  const categoryName = categoryMap[params.categoryName];

  return (
    <div className="flex-1 w-full flex flex-col py-4">
      <Text typography="h2" className="mb-6 text-center">
        {categoryName}
      </Text>
      <Text typography="h4">오늘의 할인율 TOP5</Text>
      <Text typography="p" className="md:text-lg text-gray-500">
        오늘 할인율이 가장 높은 상품리스트
      </Text>
      <Suspense fallback={<MacbookProductListSkeleton />}>
        <MacbookProductList category={params.categoryName} />
      </Suspense>
      {children}
    </div>
  );
}
