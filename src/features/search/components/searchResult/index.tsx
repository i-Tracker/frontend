'use client';

import { CategoryType } from '@/features/category/constants';
import { useGetSearchResult } from '../../hooks/useSearchResult';
import { FilterProperty } from '../../api/getFilterProperty';
import queryString from 'query-string';
import { SearchResultItem } from './Item';

interface SearchResultProps {
  category: CategoryType;
  params: FilterProperty;
}

export const SearchResultList = ({ category, params }: SearchResultProps) => {
  const { data: productData } = useGetSearchResult(category, params);

  return (
    <div className="max-w-[1080px] mx-auto">
      <ul className="grid grid-cols-2 md:grid-cols-6 gap-8 my-6">
        {productData?.data.map((productItem) => {
          return <SearchResultItem key={productItem.id} productItem={productItem} />;
        })}
      </ul>
    </div>
  );
};
