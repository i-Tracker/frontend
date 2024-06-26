'use client';

import { MacbookSearchItem } from '@/features/search/components/searchResult/Item/MacbookSearchItem';
import { Airpods, Macbook } from '../../api/getProductList';
import { AirpodsSearchItem } from '@/features/search/components/searchResult/Item/AirpodsSearchItem';
import { useGetMainProductList } from '../../hooks/useGetMainProductList';

export const MainProductList = () => {
  const { data: productList } = useGetMainProductList();

  const renderProductItem = (productItem: Macbook | Airpods, index: number) => {
    switch (productItem.category) {
      case 'macbook_air':
      case 'macbook_pro':
        return <MacbookSearchItem key={productItem.id} productItem={productItem as Macbook} rank={index} />;
      case 'airpods':
      case 'airpods_max':
      case 'airpods_pro':
        return <AirpodsSearchItem key={productItem.id} productItem={productItem as Airpods} rank={index} />;
      default:
        return <div>준비중인 카테고리입니다.</div>;
    }
  };

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-12 my-6">
        {productList.data.map(renderProductItem)}
      </ul>
    </div>
  );
};
