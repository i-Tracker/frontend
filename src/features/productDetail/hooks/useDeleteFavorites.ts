import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchFavorites } from '../api/patchFavorites';
import { CategoryType } from '@/features/category/constants';
import { useRouter } from 'next/navigation';

export const useDeleteFavorites = (productId: number, category: CategoryType) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: () => patchFavorites(productId, category),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
    onError: () => {
      alert('삭제에 실패했습니다.');
      router.push('/');
    },
  });
};
