import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query';
import { GetFavoritesResponse, getFavorites } from '../api/getFavorites';

export const useGetFavorites = (): UseSuspenseQueryResult<GetFavoritesResponse> => {
  return useSuspenseQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites,
  });
};
