import { CategoryType } from '@/features/category/constants';
import instance from '@/shared/api/axios/instance';
import { API_BASE_URL } from '@/shared/api/constants';
import { convertAirpodsType } from '@/shared/utils';
import { AxiosError } from 'axios';

export const patchFavorites = async (productId: number, category: CategoryType) => {
  try {
    const requestBody = {
      productId: productId,
      productCategory: convertAirpodsType(category),
    };

    await instance.patch(`${API_BASE_URL}/api/v1/favorites`, requestBody);
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error('알림 등록에 실패했습니다.');
    }
  }
};
