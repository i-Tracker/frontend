import { categoryMap, categoryType } from '@/features/category/constants';
import { ProductList } from '@/features/product/components';
import { Text } from '@/shared/components/shadcn/Text';
import { convertToLowerCaseWithoutSpace } from '@/shared/utils';

export default function CategoryNamePage({ params }: { params: { categoryName: categoryType } }) {
  const categoryName = categoryMap[params.categoryName];

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center">
      <Text typography="h2">{categoryName}</Text>
      <ProductList category={params.categoryName} />
    </div>
  );
}
