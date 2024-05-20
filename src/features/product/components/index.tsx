'use client';

import { categoryType } from '@/features/category/constants';
import { useGetProductList } from '../hooks/useGetProductList';
import { ProductItem } from './Item';
import { Text } from '@/shared/components/shadcn/Text';

export const ProductList = ({ category }: { category: categoryType }) => {
  const { data: productData } = useGetProductList(category);

  if (!productData) {
    return <Text>제품을 불러오지 못했다잉</Text>;
  }

  return (
    <div className="max-w-[1080px] mx-auto px-4">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {productData?.data.map((productItem) => {
          return <ProductItem key={productItem.id} productItem={productItem} />;
        })}
      </ul>
    </div>
  );
};
