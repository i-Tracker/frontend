'use client';

import { CategoryType } from '@/features/category/constants';
import { useGetSearchResult } from '../../hooks/useSearchResult';
import { FilterProperty } from '../../api/getFilterProperty';
import { SearchResultItem } from './Item';

interface SearchResultProps {
  category: CategoryType;
  params: FilterProperty;
}

export const SearchResultList = ({ category, params }: SearchResultProps) => {
  const { data: productData } = useGetSearchResult(category, params);

  return (
    <div className="mx-auto">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-12 my-6">
        {productData?.data.map((productItem) => {
          return <SearchResultItem key={productItem.id} productItem={productItem} />;
        })}
      </ul>
    </div>
  );
};
