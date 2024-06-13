'use client';

import { useGetCategoryList } from '../../hooks/useGetCategoryList';
import { CategoryItem } from './Item';

export const CategoryList = () => {
  const { data } = useGetCategoryList();

  const desiredOrder = ['macbook_air', 'macbook_pro', 'airpods', 'mac', 'i_phone', 'i_pad', 'apple_watch'];

  const sortedCategories = data?.categories.sort((a, b) => desiredOrder.indexOf(a) - desiredOrder.indexOf(b));

  return (
    <div className="max-w-[1080px] mx-auto mb-12">
      <ul className="grid grid-cols-4 md:grid-cols-7 gap-4">
        {sortedCategories?.map((category) => {
          return <CategoryItem key={category} categoryItem={category} />;
        })}
      </ul>
    </div>
  );
};
