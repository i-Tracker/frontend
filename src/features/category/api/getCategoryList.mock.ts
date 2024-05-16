import { HttpHandler, HttpResponse, http } from 'msw';
import { getCategoryListUrl } from './getCategoryList';

export const getMockCategoryList: HttpHandler = http.get(getCategoryListUrl, () => {
  return HttpResponse.json(GET_MOCK_CATEGORY_LIST.success);
});

export const GET_MOCK_CATEGORY_LIST = {
  success: {
    categories: ['Macbook Air', 'Macbook Pro', 'iPhone', 'Mac', 'AirPods', 'Watch', 'iPad'],
  },
};
