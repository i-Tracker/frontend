import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query';
import { GetFilterPropertyResponse, getFilterProperty, FilterProperty } from '../api/getFilterProperty';

export const useGetProperty = (
  category: string,
  filters: FilterProperty,
): UseSuspenseQueryResult<GetFilterPropertyResponse> => {
  return useSuspenseQuery({
    queryKey: ['filter', category, filters],
    queryFn: () => getFilterProperty(category, filters),
  });
};
