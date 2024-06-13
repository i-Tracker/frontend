import { categoryMap, CategoryType } from '@/features/category/constants';
import { Text } from '@/shared/components/shadcn/Text';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CategoryItemProps {
  categoryItem: CategoryType;
}

export const CategoryItem = ({ categoryItem }: CategoryItemProps) => {
  const categoryName = categoryMap[categoryItem];
  const router = useRouter();

  const isDisabledCategory = ['mac', 'apple_watch', 'i_phone', 'i_pad'].includes(categoryItem);
  const handleClickCategory = () => {
    if (isDisabledCategory) {
      alert('준비중인 카테고리입니다.');
      return;
    }

    router.push(`/category/${categoryItem}`);
  };

  const categoryClass = isDisabledCategory ? 'opacity-30' : '';

  return (
    <li className={categoryClass}>
      <div
        className="flex flex-col items-center gap-2 cursor-pointer"
        onClick={handleClickCategory}
        aria-label={categoryItem}
      >
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
      </div>
    </li>
  );
};
