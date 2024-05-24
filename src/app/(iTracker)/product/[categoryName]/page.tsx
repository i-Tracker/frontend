import { categoryMap, CategoryType } from '@/features/category/constants';
import { MacbookProductList } from '@/features/product/components/macbook';
import { MacbookProductListSkeleton } from '@/features/product/components/macbook/Skeleton';
import { API_BASE_URL } from '@/shared/api/constants';
import { Text } from '@/shared/components/shadcn/Text';
import { Suspense } from 'react';

export async function generateStaticParams() {
  const res = await fetch(`${API_BASE_URL}/api/v1/category`);

  const url = (await res.json()) as string[];

  // Map each category to the required format
  return url.map((category) => ({
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
