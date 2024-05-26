import { categoryMap, CategoryType } from '@/features/category/constants';
import { MacbookProductList } from '@/features/product/components/macbook';
import { MacbookProductListSkeleton } from '@/features/product/components/macbook/Skeleton';
import { Text } from '@/shared/components/shadcn/Text';
import { Suspense } from 'react';

export function generateStaticParams() {
  // const categoryData = await getCategoryList();

  const categories = ['macbook_air', 'macbook_pro'];

  return categories.map((category: string) => ({
    categoryName: category,
  }));
}

export default function CategoryNamePage({ params }: { params: { categoryName: CategoryType } }) {
  const categoryName = categoryMap[params.categoryName];

  return (
    <div className="flex-1 w-full flex flex-col gap-4 pt-8">
      <Text typography="h2">{categoryName}</Text>
      <Suspense fallback={<MacbookProductListSkeleton />}>
        <MacbookProductList category={params.categoryName} />
      </Suspense>
    </div>
  );
}
