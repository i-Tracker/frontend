import { API_BASE_URL } from '@/shared/api/constants';
import queryString from 'query-string';

export type GetFilterPropertyResponse = {
  data: FilterProperty;
};

export type FilterProperty = {
  size?: number[];
  color?: string[];
  processor?: string[];
  storage?: string[];
  memory?: string[];
};

export const getFilterPropertyUrl = (category: string) => `${API_BASE_URL}/api/v1/products/${category}/filter`;

export const getFilterProperty = async (
  category: string,
  filters: FilterProperty,
): Promise<GetFilterPropertyResponse> => {
  const queryParams = queryString.stringify(filters, { arrayFormat: 'comma' });

  console.log(queryParams);

  const url = `${getFilterPropertyUrl(category)}?${queryParams}`;

  const response = await fetch(url);

  const data = (await response.json()) as GetFilterPropertyResponse;
  return data;
};
