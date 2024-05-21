import { categoryMap, categoryType } from '@/features/category/constants';
import { ProductList } from '@/features/product/components';
import { Text } from '@/shared/components/shadcn/Text';

export default function CategoryNamePage({ params }: { params: { categoryName: categoryType } }) {
  const categoryName = categoryMap[params.categoryName];

  return (
    <div className="flex-1 w-full flex flex-col gap-4 pt-8">
      <Text typography="h2">{categoryName}</Text>
      <ProductList category={params.categoryName} />
    </div>
  );
}
