'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Next.js의 라우터를 사용
import { CategoryType } from '@/features/category/constants';
import { Filter } from '@/features/search/components/filter';

export default function CategoryNamePage({ params }: { params: { categoryName: CategoryType } }) {
  const router = useRouter();

  useEffect(() => {
    if (params.categoryName === 'airpods') {
      router.push(`/category/airpods/search`);
    }
  }, [router, params.categoryName]);

  if (params.categoryName === 'airpods') {
    return null;
  }

  return <Filter title="상품 필터" category={params.categoryName} variant={false} />;
}
