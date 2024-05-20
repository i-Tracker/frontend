import { API_BASE_URL } from '@/shared/api/constants';
import { categoryType } from '../constants';

export type GetCategoryListResponse = {
  categories: categoryType[];
};

export const getCategoryListUrl = `${API_BASE_URL}/api/category`;

export const getCategoryList = async (): Promise<GetCategoryListResponse> => {
  const response = await fetch(getCategoryListUrl);

  return await response.json();
};
