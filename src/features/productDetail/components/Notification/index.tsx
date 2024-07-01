'use client';

import { CategoryType } from '@/features/category/constants';
import { Button } from '@/shared/components/shadcn/ui/button';
import { usePatchFavorites } from '../../hooks/usePatchFavorites';

interface NotificationProps {
  productId: number;
  category: CategoryType;
  isFavorite: boolean;
}

const Notification = ({ productId, category, isFavorite }: NotificationProps) => {
  const { mutate: patchFavorites } = usePatchFavorites(productId, category, isFavorite);

  const handleAddFavoritesButton = () => {
    patchFavorites();
  };

  return (
    <div>
      {isFavorite ? (
        <Button size="lg" className="w-full bg-badge hover:bg-badge" onClick={handleAddFavoritesButton}>
          🔔 가격 변동 알림 해제
        </Button>
      ) : (
        <Button size="lg" className="w-full" onClick={handleAddFavoritesButton}>
          🔔 가격 변동 알림 받기
        </Button>
      )}
    </div>
  );
};

export default Notification;
