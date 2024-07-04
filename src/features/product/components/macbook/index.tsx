'use client';

import { CategoryType } from '@/features/category/constants';
import { useGetProductList } from '../../hooks/useGetProductList';
import { MacbookSearchItem } from '@/features/search/components/searchResult/Item/MacbookSearchItem';

export const MacbookProductList = ({ category }: { category: CategoryType }) => {
  const { data: productData } = useGetProductList(category);

  return (
    <div>
      <ul className="overflow-x-auto flex gap-6 md:gap-12 my-6">
        {productData?.data.map((productItem, index) => {
          return <MacbookSearchItem key={productItem.id} productItem={productItem} rank={index} />;
        })}
      </ul>
    </div>
  );
};
