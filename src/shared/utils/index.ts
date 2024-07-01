import { CategoryType } from '@/features/category/constants';

export const convertToLocalFormat = (input: number) => {
  return input.toLocaleString('ko-kr');
};

export const convertAirpodsType = (category: CategoryType) => {
  switch (category) {
    case 'airpods_max':
    case 'airpods_pro':
      return 'airpods';
    default:
      return category;
  }
};
