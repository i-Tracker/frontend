import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetFilterPropertyResponse, getFilterProperty, FilterProperty } from '../api/getFilterProperty';
import { CategoryType } from '@/features/category/constants';

export const useGetProperty = (
  category: CategoryType,
  property: FilterProperty,
): UseQueryResult<GetFilterPropertyResponse> => {
  return useQuery({
    queryKey: ['filter', category, property],
    queryFn: () => getFilterProperty(category, property),
  });
};
