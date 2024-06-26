import { categoryMap } from '@/features/category/constants';
import { Airpods } from '@/features/product/api/getProductList';
import { Badge } from '@/shared/components/Badge';
import DiscountBadge from '@/shared/components/DiscountBadge';
import { Text } from '@/shared/components/shadcn/Text';
import { disabledStyles } from '@/shared/styles';
import { convertToLocalFormat } from '@/shared/utils';
import Image from 'next/image';
import Link from 'next/link';

interface AirpodsSearchItemProps {
  productItem: Airpods;
  rank?: number;
}

export const AirpodsSearchItem = ({ productItem, rank }: AirpodsSearchItemProps) => {
  const categoryName = categoryMap[productItem.category];

  return (
    <li className={`w-full mb-5 ${disabledStyles(productItem.isOutOfStock)}`}>
      <Link href={`/products/airpods/${productItem.id}`} className="flex flex-col gap-2 cursor-pointer">
        <div className="relative flex items-center justify-center w-auto h-full rounded-md border-gray-200 border">
          {rank !== undefined && (
            <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-2 text-xs font-bold rounded-tl">
              {rank + 1}위
            </div>
          )}
          <Image
            src={productItem.imageUrl}
            alt={productItem.title}
            width={120}
            height={120}
            className="object-contain w-[120px] h-auto py-4"
          />
          {productItem.isOutOfStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Text typography="p" className="text-white">
                현재 품절 상태입니다
              </Text>
            </div>
          )}
        </div>

        <div className="mb-2">
          {productItem.label === true ? (
            <Badge label={'역대 최저가'} />
          ) : (
            <div className="inline-flex py-1 px-2 mt-2 mb-2">
              <div className="h-[12px]"></div>
            </div>
          )}
          <Text typography="p" className="font-bold leading-none">
            {categoryName}
          </Text>
          <Text typography="small">{productItem.title}</Text>
        </div>
        <div>
          <div className="flex items-center gap-2 mt-4">
            <DiscountBadge discountPercentage={productItem.discountPercentage} />
            <Text typography="p" className="font-bold">
              {convertToLocalFormat(productItem.currentPrice)}원
            </Text>
          </div>
        </div>
      </Link>
    </li>
  );
};
