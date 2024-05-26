import { API_BASE_URL } from '@/shared/api/constants';
import { CategoryType } from '../constants';

export type GetCategoryListResponse = {
  categories: CategoryType[];
};

export const getCategoryListUrl = `${API_BASE_URL}/api/v1/category`;

export const getCategoryList = async (): Promise<GetCategoryListResponse> => {
  const response = await fetch(getCategoryListUrl);

  const data = (await response.json()) as GetCategoryListResponse;

  return data;
};
