import { Text } from '@/shared/components/shadcn/Text';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../api/getProductList';

interface ProductItemProps {
  productItem: Product;
}

export const ProductItem = ({ productItem }: ProductItemProps) => {
  return (
    <li>
      <Link href="" className="flex flex-col items-center gap-2 cursor-pointer">
        <div className="flex items-center justify-center w-[150px] h-[150px] bg-neutral-100 rounded">
          <Image
            src={productItem.imageUrl}
            alt={productItem.title}
            width="60"
            height="60"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
        <Text typography="xsmall">{productItem.title}</Text>
      </Link>
    </li>
  );
};
