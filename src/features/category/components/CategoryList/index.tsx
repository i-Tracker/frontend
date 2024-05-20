'use client';

import { useGetCategoryList } from '../../hooks/useGetCategoryList';
import { CategoryItem } from './Item';

export const CategoryList = () => {
  const { data } = useGetCategoryList();

  return (
    <div className="max-w-[1080px] mx-auto">
      <ul className="flex flex-wrap gap-6">
        {data?.categories.map((category) => {
          return <CategoryItem key={category} categoryItem={category} />;
        })}
      </ul>
    </div>
  );
};
