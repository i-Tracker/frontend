import { ProductItemSkeleton } from './Item/Skeleton';

export const ProductListSkeleton = () => {
  const items = Array.from({ length: 10 }, (_, i) => <ProductItemSkeleton key={i} />);

  return (
    <div className="max-w-[1080px]">
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-8">{items}</ul>
    </div>
  );
};
