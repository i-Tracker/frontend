import { categoryMap } from '@/features/category/constants';
import { Macbook, Product } from '@/features/product/api/getProductList';
import { Text } from '@/shared/components/shadcn/Text';
import Image from 'next/image';
import Link from 'next/link';

interface ProductItemProps {
  productItem: Product | Macbook;
}

export const ProductItem = ({ productItem }: ProductItemProps) => {
  const categoryName = categoryMap[productItem.category];

  return (
    <li>
      <Link href="" className="w-[150px] flex flex-col items-center gap-2 cursor-pointer">
        <div className="flex items-center justify-center w-[150px] h-[150px] bg-neutral-100 rounded">
          <Image
            src={productItem.imageUrl}
            alt={productItem.title}
            width="120"
            height="120"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
        <div>{productItem.label}</div>
        <Text typography="p" className="font-bold">
          {categoryName}
        </Text>
        <Text typography="small">{productItem.title}</Text>
      </Link>
    </li>
  );
};
