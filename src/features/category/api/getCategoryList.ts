import { API_BASE_URL } from '@/shared/api/constants';

export type GetCategoryListResponse = {
  categories: string[];
};

export const getCategoryListUrl = `${API_BASE_URL}/category`;

export const getCategoryList = async (): Promise<GetCategoryListResponse> => {
  const response = await fetch(getCategoryListUrl);

  return await response.json();
};
