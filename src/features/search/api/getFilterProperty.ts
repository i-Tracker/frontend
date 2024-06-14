import { API_BASE_URL } from '@/shared/api/constants';
import queryString from 'query-string';

export type GetFilterPropertyResponse = {
  data: FilterProperty;
};

export const filterKeyMap = {
  size: '화면 크기',
  color: '색상',
  processor: '프로세서',
  storage: '저장장치',
  memory: '메모리',
};

type FilterKeys = keyof typeof filterKeyMap;

export type FilterProperty = {
  [key in FilterKeys]?: (string | number)[];
};

export const getFilterPropertyUrl = (category: string) => `${API_BASE_URL}/api/v1/products/${category}/filter`;

export const getFilterProperty = async (
  category: string,
  property: FilterProperty,
): Promise<GetFilterPropertyResponse> => {
  try {
    const queryParams = queryString.stringify(property, { arrayFormat: 'comma' });

    const url = `${getFilterPropertyUrl(category)}?${queryParams}`;

    const response = await fetch(url);

    const data = (await response.json()) as GetFilterPropertyResponse;

    return data;
  } catch {
    throw new Error('필터 정보를 받아오지 못했습니다.');
  }
};
