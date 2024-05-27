'use client';

import { CategoryType } from '@/features/category/constants';
import { useGetProductList } from '../../hooks/useGetProductList';
import { MacbookProductListItem } from './Item';

export const MacbookProductList = ({ category }: { category: CategoryType }) => {
  const { data: productData } = useGetProductList(category);

  return (
    <div>
      <ul className="whitespace-nowrap overflow-x-auto flex gap-6">
        {productData?.data.map((productItem) => {
          return <MacbookProductListItem key={productItem.id} productItem={productItem} />;
        })}
      </ul>
    </div>
  );
};
