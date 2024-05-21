import { CategoryItemSkeleton } from './Item/Skeleton';

export const CategoryListSkeleton = () => {
  const items = Array.from({ length: 7 }, (_, i) => <CategoryItemSkeleton key={i} />);

  return (
    <div className="max-w-[1080px] mx-auto">
      <ul className="grid grid-cols-4 md:grid-cols-7 gap-4">{items}</ul>
    </div>
  );
};
