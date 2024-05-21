import { categoryType } from '@/features/category/constants';
import { API_BASE_URL } from '@/shared/api/constants';

export type GetProductListResponse = {
  data: Product[];
};

export type GetMacbookProductListResponse = {
  data: Macbook[];
};

export type Product = {
  id: number;
  title: string;
  category: categoryType;
  size: number;
  discountPercentage: number;
  currentPrice: number;
  label: string;
  imageUrl: string;
  isOutOfStock: boolean;
};

export type Macbook = Product & {
  chip: string;
  cpu: string;
  gpu: string;
  storage: string;
  memory: string;
  color: string;
};

export const getProductListUrl = (category: string) => `${API_BASE_URL}/api/products/${category}`;

export const getProductList = async (category: categoryType): Promise<GetProductListResponse> => {
  const response = await fetch(getProductListUrl(category));

  const data: GetProductListResponse = (await response.json()) as GetProductListResponse;

  return data;
};
