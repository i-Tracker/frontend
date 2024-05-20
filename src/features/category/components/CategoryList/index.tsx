'use client';

import { useGetCategoryList } from '../../hooks/useGetCategoryList';
import { CategoryItem } from './Item';

export const CategoryList = () => {
  const { data } = useGetCategoryList();

  return (
    <div className="max-w-[1080px] mx-auto px-4">
      <ul className="grid grid-cols-4 md:grid-cols-7 gap-6">
        {data?.categories.map((category) => {
          return <CategoryItem key={category} categoryItem={category} />;
        })}
      </ul>
    </div>
  );
};
