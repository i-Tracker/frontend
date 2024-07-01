import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchFavorites } from '../api/patchFavorites';
import { CategoryType } from '@/features/category/constants';
import { useToast } from '@/shared/components/shadcn/ui/use-toast';
import { ToastAction } from '@/shared/components/shadcn/ui/toast';
import { useRouter } from 'next/navigation';

export const usePatchFavorites = (productId: number, category: CategoryType, isFavorite: boolean) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: () => patchFavorites(productId, category),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['favorites'] });
      await queryClient.refetchQueries({ queryKey: ['productDetail'] });

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
      } else if (isFavorite) {
        toast({
          title: '가격 알림이 해제되었어요!',
          description: '다시 알림을 받으시려면 `가격변동 알림 받기`를 눌러주세요',
        });
      }
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: '알림 설정 실패',
        description: '알림 설정에 실패했어요. 다시 시도 해주세요',
      });
    },
  });
};
