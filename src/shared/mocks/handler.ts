import { getMockCategoryList } from '@/features/category/api/getCategoryList.mock';
import { getMockProductList } from '@/features/product/api/getProductList.mock';
import { HttpHandler } from 'msw';

export const handlers: HttpHandler[] = [getMockCategoryList, getMockProductList];
