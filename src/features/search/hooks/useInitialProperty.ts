import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GetFilterPropertyResponse, getFilterProperty } from '../api/getFilterProperty';
import { CategoryType } from '@/features/category/constants';

export const useGetInitialProperty = (category: CategoryType): UseQueryResult<GetFilterPropertyResponse> => {
  return useQuery({
    queryKey: ['filter', category],
    queryFn: () => getFilterProperty(category, {}),
  });
};
