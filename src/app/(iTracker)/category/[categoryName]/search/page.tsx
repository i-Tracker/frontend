'use client';

import { CategoryType, categoryMap } from '@/features/category/constants';
import { FilterProperty } from '@/features/search/api/getFilterProperty';
import { Filter } from '@/features/search/components/filter';
import { SearchResultList } from '@/features/search/components/searchResult';
import { Text } from '@/shared/components/shadcn/Text';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef } from 'react';

export default function SearchResult({ params }: { params: { categoryName: CategoryType } }) {
  // 백엔드에 검색결과 api 요청
  const categoryName = categoryMap[params.categoryName];
  const searchParams = useSearchParams();
  const filterProperty = Array.from(searchParams.entries()).reduce<FilterProperty>((acc, [property, value]) => {
    if (!acc[property as keyof FilterProperty]) {
      acc[property as keyof FilterProperty] = [];
    }
    (acc[property as keyof FilterProperty] as string[]).push(value);
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
        <Text typography="h4" className="inline-block mr-1">
          {categoryName}
        </Text>
        {Array.from(searchParams.entries()).map(([property, value]) => {
          return (
            <Text typography="h4" key={value} className="inline mr-1">
              {property === 'size' ? `${value}인치` : value}
            </Text>
          );
        })}
        <Text className="my-2">에 대한 필터링 결과입니다.</Text>
      </div>
      <Suspense fallback={<div>불러오는 중;</div>}>
        <SearchResultList category={params.categoryName} params={filterProperty} />
      </Suspense>
      <Filter title="필터 재설정" category={params.categoryName} variant={true} />
    </div>
  );
}
