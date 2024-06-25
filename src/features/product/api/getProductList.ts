import { CategoryType } from '@/features/category/constants';
import { API_BASE_URL } from '@/shared/api/constants';

export type GetProductListResponse = {
  data: Product[];
};

export type GetMacbookProductListResponse = {
  data: Macbook[];
};

export type GetMainProductListResponse = {
  data: Airpods[] | Macbook[];
};

export type Product = {
  id: number;
  title: string;
  category: CategoryType;
  size: number;
  discountPercentage: number;
  currentPrice: number;
  label: boolean;
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

export type Airpods = Product & {
  chargingType: string;
  canWirelessCharging: boolean;
  generation: number;
};

export const getProductListUrl = (category: string) => `${API_BASE_URL}/api/v1/products/${category}`;

export const getProductList = async (category: CategoryType): Promise<GetProductListResponse> => {
  try {
    const response = await fetch(getProductListUrl(category), { cache: 'no-store' });

    const data: GetProductListResponse = (await response.json()) as GetProductListResponse;

    return data;
  } catch {
    throw new Error('상품을 불러오지 못했습니다.');
  }
};

export const getMainProductListUrl = () => `${API_BASE_URL}/api/v1/products`;

export const getMainProductList = async (): Promise<GetMainProductListResponse> => {
  try {
    const response = await fetch(getMainProductListUrl(), { cache: 'no-store' });

    const data: GetMainProductListResponse = (await response.json()) as GetMainProductListResponse;

    return data;
  } catch (e) {
    console.error(e);
    throw new Error('상품을 불러오지 못했습니다.');
  }
};
