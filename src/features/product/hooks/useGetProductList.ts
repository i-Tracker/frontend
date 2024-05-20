import { UseQueryResult, UseSuspenseQueryResult, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { GetProductListResponse, getProductList } from '../api/getProductList';
import { categoryType } from '@/features/category/constants';

export const useGetProductList = (category: categoryType): UseQueryResult<GetProductListResponse> => {
  return useQuery({
    queryKey: ['product', category],
    queryFn: () => getProductList(category),
  });
};
