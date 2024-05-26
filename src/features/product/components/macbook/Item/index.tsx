import { categoryMap } from '@/features/category/constants';
import { Macbook } from '@/features/product/api/getProductList';
import { Text } from '@/shared/components/shadcn/Text';
import { convertToLocalFormat } from '@/shared/utils';
import Image from 'next/image';
import Link from 'next/link';

interface ProductItemProps {
  productItem: Macbook;
}

export const MacbookProductListItem = ({ productItem }: ProductItemProps) => {
  const categoryName = categoryMap[productItem.category];

  return (
    <li className="mb-6">
      <Link href="" className="w-[160px] md:w-[200px] flex flex-col gap-2 cursor-pointer">
        <div className="flex items-center justify-center bg-neutral-100 w-[160px] md:w-[200px] h-[170px] rounded">
          <Image
            src={productItem.imageUrl}
            alt={productItem.title}
            width={120}
            height={120}
            style={{ width: 120, height: 'auto' }}
          />
        </div>
        <div className="mb-2">
          <Text typography="small">{productItem.label}</Text>
          <Text typography="h4" className="font-bold">
            {categoryName}
          </Text>
          <Text typography="p">{productItem.title}</Text>
        </div>
        <div>
          <div className="flex items-center justify-center bg-slate-950 rounded-md w-[35px] h-[35px] text-white my-2">
            <Text typography="small">{productItem.chip}</Text>
          </div>
          <div className="flex flex-col gap-1">
            <Text typography="small" className="font-bold">
              {productItem.cpu}
            </Text>
            <Text typography="small" className="font-bold">
              {productItem.gpu}
            </Text>
            <Text typography="small" className="font-bold">
              {productItem.storage}
            </Text>
            <Text typography="small" className="font-bold">
              {productItem.memory}
            </Text>
            <Text typography="small" className="font-bold">
              {productItem.color}
            </Text>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center justify-center bg-red-200 w-[30px] h-[20px] rounded">
              <Text typography="xsmall" className="text-red-600 font-bold">
                {productItem.discountPercentage}%
              </Text>
            </div>
            <Text typography="h4">{convertToLocalFormat(productItem.currentPrice)}원</Text>
          </div>
        </div>
      </Link>
    </li>
  );
};