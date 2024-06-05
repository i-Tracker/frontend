import { InfiniteData, useSuspenseInfiniteQuery, UseSuspenseInfiniteQueryResult } from '@tanstack/react-query';
import { FilterProperty } from '../api/getFilterProperty';
import { CategoryType } from '@/features/category/constants';
import { getSearchResult, GetSearchResultResponse } from '../api/getSearchResult';

export const useGetSearchResult = (
  category: CategoryType,
  property: FilterProperty,
): UseSuspenseInfiniteQueryResult<InfiniteData<GetSearchResultResponse>> => {
  return useSuspenseInfiniteQuery({
    queryKey: ['search', category, property],
    queryFn: ({ pageParam }) => getSearchResult(category, property, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.pageInfo.lastPage === lastPage.pageInfo.currentPage) {
        return undefined;
      }

      return lastPage.pageInfo.currentPage + 1;
    },
  });
};
