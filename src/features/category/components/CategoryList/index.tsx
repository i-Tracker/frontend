'use client';

import { useGetCategoryList } from '../../hooks/useGetCategoryList';

export const CategoryList = () => {
  const { data } = useGetCategoryList();

  return (
    <ul className="flex gap-3">
      {data.categories.map((category) => {
        return <li key={category}>{category}</li>;
      })}
    </ul>
  );
};
