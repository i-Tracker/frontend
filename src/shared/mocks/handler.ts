import { getMockCategoryList } from '@/features/category/api/getCategoryList.mock';
import { HttpHandler } from 'msw';

export const handlers: HttpHandler[] = [getMockCategoryList];
