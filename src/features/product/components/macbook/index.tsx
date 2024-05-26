'use client';

import { CategoryType } from '@/features/category/constants';
import { useGetProductList } from '../../hooks/useGetProductList';
import { MacbookProductListItem } from './Item';

export const MacbookProductList = ({ category }: { category: CategoryType }) => {
  const { data: productData } = useGetProductList(category);

  return (
    <div className="max-w-[1080px] mx-auto">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {productData?.data.map((productItem) => {
          return <MacbookProductListItem key={productItem.id} productItem={productItem} />;
        })}
      </ul>
    </div>
  );
};
