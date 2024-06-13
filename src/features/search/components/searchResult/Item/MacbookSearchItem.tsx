import { categoryMap } from '@/features/category/constants';
import { Macbook } from '@/features/product/api/getProductList';
import { Badge } from '@/shared/components/Badge';
import DiscountBadge from '@/shared/components/DiscountBadge';
import { Text } from '@/shared/components/shadcn/Text';
import { disabledStyles } from '@/shared/styles';
import { convertToLocalFormat } from '@/shared/utils';
import Image from 'next/image';
import Link from 'next/link';

interface MacbookSearchItemProps {
  productItem: Macbook;
}

export const MacbookSearchItem = ({ productItem }: MacbookSearchItemProps) => {
  const categoryName = categoryMap[productItem.category];

  return (
    <li className={`w-full mb-5 ${disabledStyles(productItem.isOutOfStock)}`}>
      <Link href={`/products/${productItem.id}`} className="flex flex-col gap-2 cursor-pointer">
        <div className="flex items-center justify-center w-auto h-full rounded-md border-gray-200 border">
          <Image
            src={productItem.imageUrl}
            alt={productItem.title}
            width={120}
            height={120}
            className="object-contain w-[120px] h-auto"
          />
        </div>
        <div className="mb-2">
          {productItem.label === true ? (
            <Badge label={'역대 최저가'} />
          ) : (
            <div className="inline-flex py-1 px-2 mt-4 mb-2"></div>
          )}
          <Text typography="p" className="font-bold leading-none">
            {categoryName}
          </Text>
          <Text typography="small">{productItem.title}</Text>
        </div>
        <div>
          <div className="flex items-center justify-center bg-slate-950 rounded-md w-[35px] h-[35px] text-white my-2">
            <Text typography="xsmall" className="text-center">
              {productItem.chip}
            </Text>
          </div>
          <div className="flex flex-col gap-1">
            <Text typography="small">{productItem.cpu}</Text>
            <Text typography="small">{productItem.gpu}</Text>
            <Text typography="small">{productItem.storage}</Text>
            <Text typography="small">{productItem.memory}</Text>
            <Text typography="small">{productItem.color}</Text>
          </div>
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
