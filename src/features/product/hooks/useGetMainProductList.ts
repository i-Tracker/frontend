import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query';
import { GetMainProductListResponse, getMainProductList } from '../api/getProductList';

export const useGetMainProductList = (): UseSuspenseQueryResult<GetMainProductListResponse> => {
  return useSuspenseQuery({
    queryKey: ['mainProduct'],
    queryFn: () => getMainProductList(),
  });
};
