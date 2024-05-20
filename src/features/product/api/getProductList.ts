import { categoryType } from '@/features/category/constants';
import { API_BASE_URL } from '@/shared/api/constants';

export type GetProductListResponse = {
  data: Product[];
};

export type Product = {
  id: number;
  title: string;
  category: string;
  size: number;
  basePrice: number;
  discountPercentage: number;
  currentPrice: number;
  label: string;
  imageUrl: string;
  isOutOfStock: boolean;
};

export const getProductListUrl = (category: string) => `${API_BASE_URL}/api/product/${category}`;

export const getProductList = async (category: categoryType): Promise<GetProductListResponse> => {
  const response = await fetch(getProductListUrl(category));

  return await response.json();
};
