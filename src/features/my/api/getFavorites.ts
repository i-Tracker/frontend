import { Airpods, Macbook } from '@/features/product/api/getProductList';
import instance from '@/shared/api/axios/instance';
import { API_BASE_URL } from '@/shared/api/constants';
import { AxiosError } from 'axios';

export interface GetFavoritesResponse {
  data: Favorites;
}

export type Favorites = (Macbook | Airpods)[];

const getFavoritesUrl = () => `${API_BASE_URL}/api/v1/favorites`;

export const getFavorites = async () => {
  try {
    const response = await instance.get<GetFavoritesResponse>(getFavoritesUrl());

    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.message);
    }
  }
};
