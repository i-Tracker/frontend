import { categoryMap, CategoryType } from '@/features/category/constants';
import { Text } from '@/shared/components/shadcn/Text';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryItemProps {
  categoryItem: CategoryType;
}

export const CategoryItem = ({ categoryItem }: CategoryItemProps) => {
  const categoryName = categoryMap[categoryItem];

  return (
    <li>
      <Link href={`/product/${categoryItem}`} className="flex flex-col items-center gap-2 cursor-pointer">
        <div className="flex items-center justify-center w-[80px] h-[80px] bg-neutral-100 rounded">
          <Image
            src={`/category/${categoryItem}.png`}
            alt={categoryItem}
            width="40"
            height="40"
            style={{ width: 'auto', height: 36 }}
          />
        </div>
        <Text typography="xsmall">{categoryName}</Text>
      </Link>
    </li>
  );
};
