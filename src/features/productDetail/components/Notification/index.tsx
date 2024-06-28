'use client';

import { CategoryType } from '@/features/category/constants';
import instance from '@/shared/api/axios/instance';
import { API_BASE_URL } from '@/shared/api/constants';
import { Button } from '@/shared/components/shadcn/ui/button';
import { ToastAction } from '@/shared/components/shadcn/ui/toast';
import { useToast } from '@/shared/components/shadcn/ui/use-toast';
import { useRouter } from 'next/navigation';

interface NotificationProps {
  productId: number;
  category: CategoryType;
  isFavorite: boolean;
}

const Notification = ({ productId, category, isFavorite }: NotificationProps) => {
  const { toast } = useToast();
  const router = useRouter();

  const handleAddFavoritesButton = async () => {
    try {
      const requestBody = {
        productId: productId,
        productCategory: category,
      };

      await instance.patch(`${API_BASE_URL}/api/v1/favorites`, requestBody);

      if (!isFavorite) {
        toast({
          title: '가격 알림이 등록되었어요!',
          description: '마이페이지에서 확인할 수 있어요',
          action: (
            <ToastAction altText="확인하러가기" onClick={() => router.push('/my')}>
              확인하러가기
            </ToastAction>
          ),
        });
        return;
      }

      toast({
        title: '가격 알림이 해제되었어요!',
        description: '다시 알림을 받으시려면 `가격변동 알림 받기`를 눌러주세요',
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {isFavorite ? (
        <Button size="lg" className="w-full bg-badge" onClick={handleAddFavoritesButton}>
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
