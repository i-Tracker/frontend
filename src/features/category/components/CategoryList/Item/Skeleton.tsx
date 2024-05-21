import { Skeleton } from '@/shared/components/shadcn/ui/skeleton';

export const CategoryItemSkeleton = () => {
  return (
    <li>
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Skeleton className="flex items-center justify-center w-[80px] h-[80px] bg-neutral-100 rounded"></Skeleton>
        <Skeleton className="w-[70px] h-[15px] rounded"></Skeleton>
      </div>
    </li>
  );
};
