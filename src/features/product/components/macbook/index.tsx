'use client';

import { CategoryType } from '@/features/category/constants';
import { useGetProductList } from '../../hooks/useGetProductList';
import { MacbookProductListItem } from './Item';

export const MacbookProductList = ({ category }: { category: CategoryType }) => {
  const { data: productData } = useGetProductList(category);

  return (
    <div>
      <ul className="whitespace-nowrap overflow-x-auto flex gap-6 md:gap-12 my-6">
        {productData?.data.map((productItem, index) => {
          return <MacbookProductListItem key={productItem.id} productItem={productItem} rank={index} />;
        })}
      </ul>
    </div>
  );
};
