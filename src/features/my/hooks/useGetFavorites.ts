import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GetFavoritesResponse, getFavorites } from '../api/getFavorites';

export const useGetFavorites = (): UseQueryResult<GetFavoritesResponse> => {
  return useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites,
  });
};
