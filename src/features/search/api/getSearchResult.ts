import { Macbook } from '@/features/product/api/getProductList';
import { API_BASE_URL } from '@/shared/api/constants';
import queryString from 'query-string';
import { FilterProperty } from './getFilterProperty';

export type GetSearchResultResponse = {
  data: Macbook[];
  pageInfo: {
    currentPage: number;
    lastPage: number;
    elementSize: number;
  };
};

export const getSearchResultUrl = (category: string) => `${API_BASE_URL}/api/v1/products/${category}/search`;

export const getSearchResult = async (
  category: string,
  property: FilterProperty,
  pageParam: number,
): Promise<GetSearchResultResponse> => {
  const queryParams = queryString.stringify(property, { arrayFormat: 'comma' });
  const pageParams = queryString.stringify({ page: pageParam }, { arrayFormat: 'comma' });

  const url = `${getSearchResultUrl(category)}?${queryParams}&${pageParams}`;

  const response = await fetch(url);

  const data = (await response.json()) as GetSearchResultResponse;

  return data;
};
