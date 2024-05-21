import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query';
import { GetCategoryListResponse, getCategoryList } from '../api/getCategoryList';

export const useGetCategoryList = (): UseSuspenseQueryResult<GetCategoryListResponse> => {
  return useSuspenseQuery({
    queryKey: ['category'],
    queryFn: getCategoryList,
  });
};
