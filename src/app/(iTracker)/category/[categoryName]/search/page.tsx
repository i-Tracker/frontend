'use client';

import { CategoryType, categoryMap } from '@/features/category/constants';
import { FilterProperty } from '@/features/search/api/getFilterProperty';
import { Filter } from '@/features/search/components/filter';
import { SearchResultList } from '@/features/search/components/searchResult';
import { ProductListSkeleton } from '@/features/search/components/searchResult/Skeleton';
import { Text } from '@/shared/components/shadcn/Text';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef } from 'react';

export default function SearchResult({ params }: { params: { categoryName: CategoryType } }) {
  const categoryName = categoryMap[params.categoryName];
  const searchParams = useSearchParams();
  const filterProperty = Array.from(searchParams.entries()).reduce<FilterProperty>((acc, [property, value]) => {
    const key = property as keyof FilterProperty;
    acc[key] = acc[key] || [];
    acc[key]?.push(value);

    return acc;
  }, {});

  const ref = useRef<HTMLDivElement>(null); // ref 타입을 HTMLDivElement로 명시

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' }); // 스무스 스크롤링 효과 추가
    }
  });

  return (
    <div className="flex-1 w-full flex flex-col py-10 border-gray-200 border-t-[1px]" ref={ref}>
      <div className="flex flex-wrap items-center">
        <Text typography="h3" className="inline-block mr-4">
          {categoryName}
        </Text>
        {Array.from(searchParams.entries()).map(([property, value]) => {
          return (
            <div key={value} className="bg-primary rounded inline mr-1 text-white px-2 py-1 text-sm">
              {property === 'size' ? `${value}인치` : value}
            </div>
          );
        })}
        <Text className="my-2">에 대한 필터링 결과입니다.</Text>
      </div>
      <Suspense fallback={<ProductListSkeleton />}>
        <SearchResultList category={params.categoryName} params={filterProperty} />
      </Suspense>
      {!(categoryName === 'AirPods') ? (
        <Filter title="필터 재설정" category={params.categoryName} variant={true} />
      ) : null}
    </div>
  );
}
