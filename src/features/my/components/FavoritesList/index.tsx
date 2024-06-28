'use client';

import { Airpods, Macbook } from '@/features/product/api/getProductList';
import { useGetFavorites } from '../../hooks/useGetFavorites';
import { MacbookSearchItem } from '@/features/search/components/searchResult/Item/MacbookSearchItem';
import { AirpodsSearchItem } from '@/features/search/components/searchResult/Item/AirpodsSearchItem';

const FavoritesList = () => {
  const { data: favorites } = useGetFavorites();

  if (favorites?.data.length === 0) {
    return <div>등록된 알림상품이 없습니다.</div>;
  }

  const renderFavoritesItem = (productItem: Macbook | Airpods) => {
    switch (productItem.category) {
      case 'macbook_air':
      case 'macbook_pro':
        return <MacbookSearchItem key={productItem.id} productItem={productItem as Macbook} />;
      case 'airpods':
      case 'airpods_max':
      case 'airpods_pro':
        return <AirpodsSearchItem key={productItem.id} productItem={productItem as Airpods} />;
      default:
        return <div>준비중인 카테고리입니다.</div>;
    }
  };

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-12 my-6">
        {favorites?.data.map(renderFavoritesItem)}
      </ul>
    </div>
  );
};

export default FavoritesList;
