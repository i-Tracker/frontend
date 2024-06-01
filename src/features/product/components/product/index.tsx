'use client';

import { CategoryType } from '@/features/category/constants';
import { useGetProductList } from '../../hooks/useGetProductList';
import { ProductItem } from './Item';

export const ProductList = ({ category }: { category: CategoryType }) => {
  const { data: productData } = useGetProductList(category);

  return (
    <div className="max-w-[1080px] mx-auto">
      <ul className="grid grid-cols-2 md:grid-cols-6 gap-8 my-6">
        {productData?.data.map((productItem) => {
          return <ProductItem key={productItem.id} productItem={productItem} />;
        })}
      </ul>
    </div>
  );
};
