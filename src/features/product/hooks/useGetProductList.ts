import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query';
import { GetMacbookProductListResponse, getProductList } from '../api/getProductList';
import { categoryType } from '@/features/category/constants';

export const useGetProductList = (category: categoryType): UseSuspenseQueryResult<GetMacbookProductListResponse> => {
  return useSuspenseQuery({
    queryKey: ['product', category],
    queryFn: () => getProductList(category),
  });
};
