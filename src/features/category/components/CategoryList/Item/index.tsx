import { Text } from '@/shared/components/shadcn/Text';
import Image from 'next/image';

interface CategoryItemProps {
  categoryItem: string;
}

export const CategoryItem = ({ categoryItem }: CategoryItemProps) => {
  return (
    <li className="flex flex-col items-center gap-2 cursor-pointer">
      <div className="flex items-center justify-center w-[80px] h-[80px] bg-slate-200 rounded">
        <Image
          src={`/category/${categoryItem}.png`}
          alt={categoryItem}
          width="60"
          height="60"
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
      <Text typography="xsmall">{categoryItem}</Text>
    </li>
  );
};
