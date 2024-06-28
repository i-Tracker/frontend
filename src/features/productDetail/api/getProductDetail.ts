import { Airpods, Macbook } from '@/features/product/api/getProductList';

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

// 클라이언트 상태 관리를 위한 api 호출함수
// export const getProductDetailUrl = (productId: number) => `/api/products/${productId}`;

// export const getProductDetail = async (productId: number): Promise<GetProductDetailResponse> => {
//   const url = `${getProductDetailUrl(productId)}`;

//   const response = await fetch(url);

//   const data = (await response.json()) as GetProductDetailResponse;

//   return data;
// };
