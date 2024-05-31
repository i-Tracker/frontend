import { API_BASE_URL } from '@/shared/api/constants';
import queryString from 'query-string';

export type GetFilterPropertyResponse = {
  data: FilterProperty;
};

type FilterKeys = 'size' | 'color' | 'processor' | 'storage' | 'memory';

export type FilterProperty = {
  [key in FilterKeys]?: (string | number)[];
};

export const getFilterPropertyUrl = (category: string) => `${API_BASE_URL}/api/v1/products/${category}/filter`;

export const getFilterProperty = async (
  category: string,
  property: FilterProperty,
): Promise<GetFilterPropertyResponse> => {
  const queryParams = queryString.stringify(property, { arrayFormat: 'comma' });

  const url = `${getFilterPropertyUrl(category)}?${queryParams}`;

  const response = await fetch(url);

  const data = (await response.json()) as GetFilterPropertyResponse;
  return data;
};
