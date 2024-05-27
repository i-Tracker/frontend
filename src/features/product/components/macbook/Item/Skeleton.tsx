import { Skeleton } from '@/shared/components/shadcn/ui/skeleton';

export const ProductItemSkeleton = () => {
  return (
    <li>
      <div className="w-[160px] md:w-[200px] flex flex-col items-center gap-2 cursor-pointer">
        <Skeleton className="flex items-center justify-center w-[160px] md:w-[200px] h-[170px] bg-neutral-100 rounded"></Skeleton>
        <Skeleton className="w-[70px] h-[10px] rounded"></Skeleton>
        <Skeleton className="w-[70px] h-[10px] rounded"></Skeleton>
        <Skeleton className="w-[70px] h-[20px] rounded"></Skeleton>
      </div>
    </li>
  );
};
