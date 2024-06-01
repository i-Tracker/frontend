import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';
import { FilterProperty } from '../api/getFilterProperty';
import { CategoryType } from '@/features/category/constants';
import { getSearchResult, GetSearchResultResponse } from '../api/getSearchResult';

export const useGetSearchResult = (
  category: CategoryType,
  property: FilterProperty,
): UseSuspenseQueryResult<GetSearchResultResponse> => {
  return useSuspenseQuery({
    queryKey: ['search', category, property],
    queryFn: () => getSearchResult(category, property),
  });
};
