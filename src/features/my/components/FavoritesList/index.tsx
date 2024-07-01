'use client';

import { Airpods, Macbook } from '@/features/product/api/getProductList';
import { useGetFavorites } from '../../hooks/useGetFavorites';
import { MacbookSearchItem } from '@/features/search/components/searchResult/Item/MacbookSearchItem';
import { AirpodsSearchItem } from '@/features/search/components/searchResult/Item/AirpodsSearchItem';
import { Text } from '@/shared/components/shadcn/Text';
import { Button } from '@/shared/components/shadcn/ui/button';
import { useRouter } from 'next/navigation';
import { getMainPageLink } from '@/shared/lib/link/page';

const FavoritesList = () => {
  const { data: favorites } = useGetFavorites();
  const router = useRouter();

  if (favorites?.data.length === 0) {
    return (
      <div className="flex flex-col">
        <Text typography="xsmall" className="my-4 inline-block">
          등록된 알림상품이 없습니다.
        </Text>
        <div>
          <Button
            size="sm"
            onClick={() => {
              router.push(getMainPageLink());
            }}
          >
            상품등록 하러가기
          </Button>
        </div>
      </div>
    );
  }

  const renderFavoritesItem = (productItem: Macbook | Airpods) => {
    switch (productItem.category) {
      case 'macbook_air':
      case 'macbook_pro':
        return <MacbookSearchItem key={productItem.id} productItem={productItem as Macbook} isFavoriteItem={true} />;
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
