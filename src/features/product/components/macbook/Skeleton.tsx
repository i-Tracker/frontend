import { ProductItemSkeleton } from './Item/Skeleton';

export const MacbookProductListSkeleton = () => {
  const items = Array.from({ length: 5 }, (_, i) => <ProductItemSkeleton key={i} />);

  return (
    <div className="mx-auto">
      <ul className="whitespace-nowrap overflow-x-auto flex gap-6 my-6">{items}</ul>
    </div>
  );
};
