import { CategoryType, categoryMap } from '@/features/category/constants';
import { getMetadata } from '@/shared/utils/metadata';
import { Metadata } from 'next';
import React from 'react';

export const generateMetadata = async ({
  params,
}: {
  params: { productId: number; category: CategoryType };
  // eslint-disable-next-line @typescript-eslint/require-await
}): Promise<Metadata> => {
  const categoryName = categoryMap[params.category];

  return getMetadata({
    title: `iTracker | ${categoryName}`,
    asPath: `/products/${params.category}/${params.productId}`,
  });
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 w-full flex flex-col">{children}</div>;
}
