/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import { CategoryType } from '@/features/category/constants';
import { useGetSearchResult } from '../../hooks/useSearchResult';
import { FilterProperty } from '../../api/getFilterProperty';
import { SearchResultItem } from './Item';
import { Button } from '@/shared/components/shadcn/ui/button';
import { Text } from '@/shared/components/shadcn/Text';

interface SearchResultProps {
  category: CategoryType;
  params: FilterProperty;
}

export const SearchResultList = ({ category, params }: SearchResultProps) => {
  const { data, hasNextPage, fetchNextPage } = useGetSearchResult(category, params);
  const productData = data.pages.map((page) => page.data).flat();

  const handleClickNextPage = () => {
    fetchNextPage();
  };

  console.log(hasNextPage);

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-12 my-6">
        {productData.map((productItem) => {
          return <SearchResultItem key={productItem.id} productItem={productItem} />;
        })}
      </ul>
      {hasNextPage ? (
        <Button className="w-full" onClick={handleClickNextPage}>
          더보기
        </Button>
      ) : (
        <div className="flex justify-center my-4">
          <Text typography="xsmall" className="text-center">
            마지막 페이지입니다.
          </Text>
        </div>
      )}
    </div>
  );
};
