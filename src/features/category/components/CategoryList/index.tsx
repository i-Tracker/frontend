'use client';

import { useGetCategoryList } from '../../hooks/useGetCategoryList';
import { CategoryItem } from './Item';

export const CategoryList = () => {
  const { data } = useGetCategoryList();

  return (
    <div className="max-w-[1080px] mx-auto">
      <ul className="grid grid-cols-4 md:grid-cols-7 gap-4">
        {data?.categories.map((category) => {
          return <CategoryItem key={category} categoryItem={category} />;
        })}
      </ul>
    </div>
  );
};
