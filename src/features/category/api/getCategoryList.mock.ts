import { HttpHandler, HttpResponse, http } from 'msw';
import { getCategoryListUrl } from './getCategoryList';

export const getMockCategoryList: HttpHandler = http.get(getCategoryListUrl, () => {
  return HttpResponse.json(GET_MOCK_CATEGORY_LIST.success);
});

export const GET_MOCK_CATEGORY_LIST = {
  success: {
    categories: ['macbook_air', 'macbook_pro', 'i_phone', 'mac', 'air_pods', 'apple_watch', 'i_pad'],
  },
};
