import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query';
import { GetMacbookProductListResponse, getProductList } from '../api/getProductList';
import { CategoryType } from '@/features/category/constants';

export const useGetProductList = (category: CategoryType): UseSuspenseQueryResult<GetMacbookProductListResponse> => {
  return useSuspenseQuery({
    queryKey: ['product', category],
    queryFn: () => getProductList(category),
  });
};
