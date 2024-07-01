import { CategoryType } from '@/features/category/constants';
import { Airpods, Macbook } from '@/features/product/api/getProductList';
import instance from '@/shared/api/axios/instance';
import { API_BASE_URL } from '@/shared/api/constants';

export type GetProductDetailResponse = Macbook & Airpods & ProductDetailInfo;

export type ProductDetailInfo = {
  allTimeHighPrice: number;
  allTimeLowPrice: number;
  averagePrice: number;
  coupangUrl: string;
  isFavorite: boolean;
  priceInfos: {
    date: string;
    currentPrice: number;
  }[];
};

export const getProductDetail = async (
  productId: number,
  category: CategoryType,
): Promise<GetProductDetailResponse> => {
  const response = await instance.get(`${API_BASE_URL}/api/v1/products/${category}/${productId}`);

  const data = (await response.data) as GetProductDetailResponse;

  return data;
};
