import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query';
import { GetProductListResponse, getProductList } from '../api/getProductList';
import { categoryType } from '@/features/category/constants';

export const useGetProductList = (category: categoryType): UseSuspenseQueryResult<GetProductListResponse> => {
  return useSuspenseQuery({
    queryKey: ['product', category],
    queryFn: () => getProductList(category),
  });
};
