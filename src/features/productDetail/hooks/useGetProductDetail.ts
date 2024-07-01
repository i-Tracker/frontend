import { CategoryType } from '@/features/category/constants';
import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query';
import { GetProductDetailResponse, getProductDetail } from '../api/getProductDetail';

export const useGetProductDetail = (
  productId: number,
  category: CategoryType,
): UseSuspenseQueryResult<GetProductDetailResponse> => {
  return useSuspenseQuery({
    queryKey: ['productDetail', productId, category],
    queryFn: () => getProductDetail(productId, category),
  });
};
